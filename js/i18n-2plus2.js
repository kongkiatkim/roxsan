// Strings that differ on the 2+2 page. Loaded after i18n.js and merged over it.
// Must stay valid JSON after the "window.I18N_OVERRIDE = " prefix (tools/check_site.py parses it).
window.I18N_OVERRIDE = {
  "th": {
    "meta.title": "ROXSAN 2+2 | รถกอล์ฟไฟฟ้า 4 ที่นั่ง สำหรับรีสอร์ท",
    "meta.desc": "ROXSAN by RMA รถกอล์ฟไฟฟ้า 2+2 ที่นั่ง รวม 4 ที่นั่ง เบาะหลังพับ 2-in-1 หน้าจอ 10.9 นิ้ว เบรกดิสก์ไฮดรอลิก 4 ล้อ รับประกันแบตเตอรี่ 5 ปี (แบตเตอรี่ VELOX) สอบถามราคาสำหรับรีสอร์ทและโรงแรม",
    "hero.eyebrow": "รถกอล์ฟไฟฟ้า 2+2 ที่นั่ง",
    "hero.title": "4 ที่นั่ง พร้อมเบาะหลังพับ 2-in-1",
    "hero.sub": "ROXSAN 2+2 ออกแบบมาสำหรับรีสอร์ทและโรงแรม ที่นั่งด้านหน้า 2 ที่นั่ง และเบาะหลังแบบพับได้อีก 2 ที่นั่ง พร้อมหน้าจอ 10.9 นิ้วและระบบเสียงให้แขกประทับใจ",
    "hero.imgalt": "รถกอล์ฟไฟฟ้า ROXSAN 2+2 สีขาว มองจากด้านหน้า",
    "facts.seats.v": "2+2",
    "facts.seats.l": "ที่นั่งรวม 4 ที่นั่ง",
    "gallery.1.alt": "ROXSAN 2+2 สีขาว มองจากด้านหน้า เห็นที่นั่งด้านหน้าและเบาะหลัง",
    "gallery.2.alt": "ท้ายรถ ROXSAN 2+2 เห็นเบาะหลังแบบพับได้ 2 ที่นั่ง",
    "gallery.note": "ภาพประกอบเพื่อการนำเสนอ รถในภาพอาจติดตั้งล้อและยางต่างจากสเปคมาตรฐาน รายละเอียดจริงอ้างอิงตามใบเสนอราคา",
    "why.title": "ทำไมรีสอร์ทเลือก ROXSAN 2+2",
    "why.1.d": "ที่นั่งรวม 4 ที่นั่ง พร้อมจอ LCD 10.9 นิ้ว Wireless CarPlay, Bluetooth, ลำโพงกันน้ำ และที่ชาร์จมือถือไร้สาย",
    "why.4.t": "เบาะหลังพับ 2-in-1",
    "why.4.d": "ที่นั่งด้านหลัง 2 ที่นั่งแบบพับได้ และรองรับอุปกรณ์เสริมที่วางถุงกอล์ฟพร้อมมือจับ รวมถึงไฟ Ambient LED และ Soundbar",
    "specs.title": "สเปค ROXSAN 2+2",
    "acc.sub": "รายการที่รองรับสำหรับรุ่น 2+2 ราคาโปรดสอบถามฝ่ายขาย",
    "form.msg": "สนใจ ROXSAN 2+2",
    "footer.other": "ดูรุ่น ROXSAN 6+2 (8 ที่นั่ง)"
  },
  "en": {
    "meta.title": "ROXSAN 2+2 | 4-Seat Electric Golf Cart for Resorts",
    "meta.desc": "ROXSAN by RMA 2+2 electric golf cart: 4 seats per vehicle, 2-in-1 rear folding seat, 10.9-inch screen, 4-wheel hydraulic disc brakes, 5-year battery warranty (VELOX battery). Request a quote for resorts and hotels.",
    "hero.eyebrow": "2+2 electric golf cart",
    "hero.title": "4 seats with a 2-in-1 rear folding seat",
    "hero.sub": "ROXSAN 2+2 is made for resorts and hotels: 2 seats up front and 2 rear folding seats, with a 10.9-inch screen and a sound system that impress guests.",
    "hero.imgalt": "ROXSAN 2+2 electric golf cart in white, seen from the front",
    "facts.seats.v": "2+2",
    "facts.seats.l": "4 seats in total",
    "gallery.1.alt": "White ROXSAN 2+2 from the front, showing the front seats and the rear seat",
    "gallery.2.alt": "Rear of the ROXSAN 2+2 showing the 2 rear folding seats",
    "gallery.note": "Images are for illustration. The cart pictured may be fitted with different wheels and tyres from the standard specification. Final details follow the quotation.",
    "why.title": "Why resorts choose the ROXSAN 2+2",
    "why.1.d": "4 seats in total, with a 10.9-inch LCD, Wireless CarPlay, Bluetooth, waterproof speakers and a wireless phone charger.",
    "why.4.t": "2-in-1 rear folding seat",
    "why.4.d": "2 rear folding seats, plus support for the optional golf-bag rack with handle, as well as Ambient LED lighting and a soundbar.",
    "specs.title": "ROXSAN 2+2 specifications",
    "acc.sub": "Items supported on the 2+2. Ask sales for prices.",
    "form.msg": "Interested in ROXSAN 2+2",
    "footer.other": "See the ROXSAN 6+2 (8 seats)"
  }
};
(function () {
  ["th", "en"].forEach(function (l) {
    Object.keys(window.I18N_OVERRIDE[l]).forEach(function (k) { window.I18N[l][k] = window.I18N_OVERRIDE[l][k]; });
  });
})();
