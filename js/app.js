(function () {
  "use strict";

  var I18N = window.I18N;
  var CONTENT = window.CONTENT;
  var SITE = window.SITE;
  var COLORS = window.COLORS;
  var COLOR_IDS = COLORS.map(function (c) { return c.id; });
  var STORE_KEY = "roxsan-lang";

  var lang = "th";
  var colorId = "ral9016";
  var lbIndex = 0;
  var lbOpener = null;

  function other(l) { return l === "th" ? "en" : "th"; }

  // Translate a key; falls back to the other language, never returns a raw key.
  function t(key) {
    var v = I18N[lang] && I18N[lang][key];
    if (v == null || v === "") v = I18N[other(lang)] && I18N[other(lang)][key];
    return v == null ? "" : v;
  }

  function pick(pair) { return pair[lang === "th" ? 0 : 1]; }

  function storageGet() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function storageSet(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) { /* storage blocked: ignore */ }
  }

  /* ---------- Language ---------- */
  function applyI18n() {
    document.querySelectorAll("*").forEach(function (el) {
      if (el.hasAttribute("data-i18n")) {
        var txt = t(el.getAttribute("data-i18n"));
        if (txt) el.textContent = txt;
      }
      Array.prototype.slice.call(el.attributes).forEach(function (a) {
        if (a.name.indexOf("data-i18n-") === 0) {
          var txt2 = t(a.value);
          if (txt2) el.setAttribute(a.name.slice(10), txt2);
        }
      });
    });
  }

  function setLang(next) {
    lang = next === "en" ? "en" : "th";
    document.documentElement.lang = lang;
    storageSet(lang);
    applyI18n();
    renderSpecs();
    renderAccessories();
    renderSwatches();
    renderFormColors();
    selectColor(colorId);
    renderContact();
    renderPdfLinks();
    if (document.getElementById("lightbox").open) syncLightboxAlt();
  }

  // Point every PDF button at the catalogue in the language currently shown.
  function renderPdfLinks() {
    document.querySelectorAll("[data-pdf-th]").forEach(function (a) {
      a.href = a.getAttribute("data-pdf-" + lang) || a.getAttribute("data-pdf-th");
    });
  }
  window.setLang = setLang;

  /* ---------- Specs & accessories ---------- */
  function renderSpecs() {
    var host = document.getElementById("specList");
    var wasOpen = {};
    host.querySelectorAll("details").forEach(function (d, i) { wasOpen[i] = d.open; });
    var firstRender = !host.children.length;
    var wide = window.matchMedia("(min-width: 640px)").matches;
    host.textContent = "";
    CONTENT.specs.forEach(function (group, gi) {
      var d = document.createElement("details");
      d.className = "spec-group";
      d.open = firstRender ? (wide || gi === 0) : !!wasOpen[gi];
      var s = document.createElement("summary");
      s.textContent = pick(group.g);
      var dl = document.createElement("dl");
      group.rows.forEach(function (row) {
        var r = document.createElement("div");
        r.className = "spec-row";
        var dt = document.createElement("dt");
        dt.textContent = pick(row[0]);
        var dd = document.createElement("dd");
        dd.textContent = pick(row[1]);
        if (row[1][1] === "Ask sales") dd.className = "ask";
        r.appendChild(dt);
        r.appendChild(dd);
        dl.appendChild(r);
      });
      d.appendChild(s);
      d.appendChild(dl);
      host.appendChild(d);
    });
  }

  function renderAccessories() {
    var ul = document.getElementById("accList");
    ul.textContent = "";
    CONTENT.accessories.forEach(function (a) {
      var li = document.createElement("li");
      var span = document.createElement("span");
      span.textContent = pick(a[0]);
      li.appendChild(span);
      if (a[1]) {
        var sm = document.createElement("small");
        sm.textContent = pick(a[1]);
        li.appendChild(sm);
      }
      ul.appendChild(li);
    });
  }

  /* ---------- Lightbox ---------- */
  // Built from the page's own gallery buttons, so each model page lists its own photos.
  var gallery = Array.prototype.map.call(document.querySelectorAll(".g-item"), function (b) {
    var img = b.querySelector("img");
    return { src: img.getAttribute("src"), key: img.getAttribute("data-i18n-alt") };
  });

  function syncLightboxAlt() {
    document.getElementById("lbImg").alt = t(gallery[lbIndex].key);
  }

  function showLightbox(i) {
    lbIndex = (i + gallery.length) % gallery.length;
    var img = document.getElementById("lbImg");
    img.src = gallery[lbIndex].src;
    syncLightboxAlt();
  }

  function openLightbox(index) {
    var dlg = document.getElementById("lightbox");
    lbOpener = document.activeElement;
    showLightbox(index);
    if (!dlg.open) dlg.showModal();
    document.body.classList.add("lock");
  }

  // Idempotent: runs from closeLightbox() and from the dialog's own close event (Esc key).
  function lightboxCleanup() {
    document.body.classList.remove("lock");
    if (lbOpener && lbOpener.focus) lbOpener.focus();
    lbOpener = null;
  }

  function closeLightbox() {
    var dlg = document.getElementById("lightbox");
    if (dlg.open) dlg.close();
    lightboxCleanup();
  }

  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;

  function initLightbox() {
    var dlg = document.getElementById("lightbox");
    document.querySelectorAll(".g-item").forEach(function (b) {
      b.addEventListener("click", function () { openLightbox(Number(b.getAttribute("data-index"))); });
    });
    document.getElementById("lbClose").addEventListener("click", closeLightbox);
    document.getElementById("lbPrev").addEventListener("click", function () { showLightbox(lbIndex - 1); });
    document.getElementById("lbNext").addEventListener("click", function () { showLightbox(lbIndex + 1); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) closeLightbox(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); showLightbox(lbIndex - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); showLightbox(lbIndex + 1); }
    });
    dlg.addEventListener("close", lightboxCleanup);
  }

  /* ---------- Colour picker ---------- */
  // The 12 RAL colours come from js/colors.js. Both model pages show a recoloured photo of the cart:
  // the image src is data-img-base + colour id (made by tools/make_colors.py).
  function colorById(id) {
    for (var i = 0; i < COLORS.length; i++) if (COLORS[i].id === id) return COLORS[i];
    return COLORS[0];
  }

  function colorLabel(c) { return c.code + " · " + pick(c.name); }

  function renderSwatches() {
    var host = document.getElementById("swatches");
    if (!host) return;
    host.textContent = "";
    COLORS.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "swatch";
      b.setAttribute("role", "radio");
      b.setAttribute("data-color", c.id);
      b.setAttribute("aria-label", colorLabel(c));
      b.style.setProperty("--c", c.hex);
      var dot = document.createElement("span");
      dot.className = "sw-dot";
      var code = document.createElement("span");
      code.className = "sw-code";
      code.textContent = c.code;
      var nm = document.createElement("span");
      nm.className = "sw-name";
      nm.textContent = pick(c.name);
      b.appendChild(dot);
      b.appendChild(code);
      b.appendChild(nm);
      host.appendChild(b);
    });
  }

  function renderFormColors() {
    var sel = document.getElementById("formColor");
    var keep = sel.value || colorId;
    sel.textContent = "";
    COLORS.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c.id;
      o.textContent = colorLabel(c);
      sel.appendChild(o);
    });
    sel.value = keep;
  }

  function updateColorName() {
    var c = colorById(colorId);
    var nameEl = document.getElementById("colorName");
    if (!nameEl) return;
    nameEl.textContent = colorLabel(c);
    var img = document.getElementById("colorImg");
    if (img) img.alt = t("color.preview") + ": " + colorLabel(c);
  }

  function selectColor(id) {
    if (COLOR_IDS.indexOf(id) === -1) return;
    colorId = id;
    document.querySelectorAll(".swatch").forEach(function (b) {
      var on = b.getAttribute("data-color") === id;
      b.setAttribute("aria-checked", String(on));
      b.tabIndex = on ? 0 : -1; // roving tabindex for the radio group
    });
    var img = document.getElementById("colorImg");
    if (img) img.src = img.getAttribute("data-img-base") + id + ".jpg";
    updateColorName();
    var sel = document.getElementById("formColor");
    if (sel) sel.value = id;
  }
  window.selectColor = selectColor;

  function initColors() {
    renderSwatches();
    renderFormColors();
    document.getElementById("formColor").addEventListener("change", function (e) { selectColor(e.target.value); });
    var group = document.getElementById("swatches");
    if (!group) return;
    // One listener for the whole group: swatches are rebuilt when the language changes.
    group.addEventListener("click", function (e) {
      var b = e.target.closest(".swatch");
      if (b) selectColor(b.getAttribute("data-color"));
    });
    // Arrow keys move through the swatches like a native radio group.
    group.addEventListener("keydown", function (e) {
      var step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      var i = (COLOR_IDS.indexOf(colorId) + step + COLOR_IDS.length) % COLOR_IDS.length;
      selectColor(COLOR_IDS[i]);
      document.querySelector('.swatch[data-color="' + COLOR_IDS[i] + '"]').focus();
    });
  }

  // Hide the floating quote bar while the quote section itself is on screen.
  function initStickyCta() {
    var bar = document.querySelector(".sticky-cta");
    var target = document.getElementById("quote");
    if (!bar || !target || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (entries) {
      bar.classList.toggle("hide", entries[0].isIntersecting);
    }, { threshold: 0.1 }).observe(target);
  }

  /* ---------- Contact & quote ---------- */
  function renderContact() {
    document.getElementById("lineLink").href = "https://line.me/ti/p/~" + SITE.line;
    document.getElementById("phoneLink").href = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
    document.getElementById("waLink").href = "https://wa.me/" + SITE.whatsapp;
    document.getElementById("fbLink").href = "https://www.facebook.com/" + SITE.facebook;
    var site = document.getElementById("siteLink");
    site.href = "https://" + SITE.website;
    site.textContent = SITE.website;
    document.getElementById("contactValues").textContent =
      "LINE " + SITE.line + "  ·  " + SITE.phone + "  ·  WhatsApp " + SITE.phone;
  }

  function buildMessage(form) {
    var f = form.elements;
    var lines = [
      t("form.msg"),
      t("form.name") + ": " + f.name.value.trim(),
      t("form.phone") + ": " + f.phone.value.trim()
    ];
    if (f.resort.value.trim()) lines.push(t("form.resort") + ": " + f.resort.value.trim());
    if (f.qty.value) lines.push(t("form.qty") + ": " + f.qty.value);
    lines.push(t("form.color") + ": " + colorLabel(colorById(f.color.value)));
    if (f.note.value.trim()) lines.push(t("form.note") + ": " + f.note.value.trim());
    return lines.join("\n");
  }

  // Returns false (and shows an inline message) when name or phone is empty.
  function submitQuote(form, channel) {
    var err = document.getElementById("formErr");
    var ok = form.elements.name.value.trim() !== "" && form.elements.phone.value.trim() !== "";
    err.hidden = ok;
    if (!ok) {
      (form.elements.name.value.trim() === "" ? form.elements.name : form.elements.phone).focus();
      return false;
    }
    var text = buildMessage(form);
    var ok2 = document.getElementById("formOk");
    ok2.hidden = true;
    if (channel === "wa") {
      window.open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    } else {
      // A personal LINE ID cannot take a prefilled message, so copy it for pasting into the chat.
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { ok2.hidden = false; }, function () {});
        }
      } catch (e) { /* clipboard blocked: the chat still opens */ }
      window.open("https://line.me/ti/p/~" + SITE.line, "_blank", "noopener");
    }
    return true;
  }
  window.submitQuote = submitQuote;

  function initForm() {
    var form = document.getElementById("quoteForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ch = e.submitter && e.submitter.getAttribute("data-channel");
      submitQuote(form, ch === "wa" ? "wa" : "line");
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Init ---------- */
  document.getElementById("langBtn").addEventListener("click", function () { setLang(other(lang)); });
  // Open every spec group when printing.
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll(".spec-group").forEach(function (d) { d.open = true; });
  });

  initLightbox();
  initColors();
  initForm();
  initStickyCta();
  // ?lang=en|th picks the language (used for sharing and to render the PDFs); otherwise the saved choice, else Thai.
  var asked = /[?&]lang=(th|en)\b/.exec(location.search);
  var saved = storageGet();
  setLang(asked ? asked[1] : (saved === "en" ? "en" : "th"));
  // ?print=1 is used only to render the PDFs: load every photo now and open every spec group.
  if (/[?&]print=1\b/.test(location.search)) {
    document.documentElement.classList.add("print-mode");
    document.querySelectorAll("img[loading]").forEach(function (i) { i.loading = "eager"; });
    document.querySelectorAll(".spec-group").forEach(function (d) { d.open = true; });
  }
  selectColor("ral9016");
  initReveal();
})();
