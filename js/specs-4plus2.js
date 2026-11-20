// 4+2 differences, applied over the shared spec data in specs.js.
// Source: VELOX Non-Lift Thai spec sheet, "4+2 ที่นั่ง" column. The accessory list is identical to the 6+2.
(function () {
  function row(group, label, value) {
    var g = window.CONTENT.specs.filter(function (s) { return s.g[1] === group; })[0];
    var r = g.rows.filter(function (x) { return x[0][1] === label; })[0];
    r[1] = value;
  }
  row("Cabin", "Seating", ["4 ที่นั่งหันหน้า + 2 ที่นั่งด้านหลังแบบพับได้ (รวม 6 ที่นั่ง)", "4 forward-facing seats + 2 rear folding seats (6 in total)"]);
  // The sheet gives a wheel size, but the photos show other wheels and tyres, so it is left to the quotation.
  row("Wheels & tyres", "Wheels & tyres", ["ล้ออัลลอยอะลูมิเนียมพร้อมยางถนน (Road Tire) — ขนาดล้อ: ยืนยันในใบเสนอราคา", "Aluminium alloy wheels with road tyres (wheel size: confirmed in quotation)"]);
})();
