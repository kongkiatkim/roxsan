// Spec and accessory data. Every pair is [Thai, English].
// Source: VELOX Non-Lift Thai spec sheet (6+2 column). Anything not in the sheet is shown as "ask sales".
const ASK = ["สอบถามฝ่ายขาย", "Ask sales"];

window.CONTENT = {
  specs: [
    {
      g: ["ระบบไฟฟ้า", "Electrical"],
      rows: [
        [["มอเตอร์", "Motor"], ["มอเตอร์ไฟฟ้ากระแสสลับแบบเหนี่ยวนำ (AC Induction) 48V 5 kW", "AC induction motor, 48V 5 kW"]],
        [["คอนโทรลเลอร์", "Controller"], ["FJ 48V-350A-G1 AC Controller", "FJ 48V-350A-G1 AC controller"]],
        [["เครื่องชาร์จ", "Charger"], ["เครื่องชาร์จอัจฉริยะแบบติดตั้งในรถ 48V / 25A", "Smart on-board charger, 48V / 25A"]],
        [["ระยะเวลาชาร์จ", "Charging time"], ["น้อยกว่า 8 ชั่วโมง (อ้างอิงการคายประจุแบตเตอรี่ 80%)", "Under 8 hours (based on 80% battery discharge)"]],
        [["DC-DC Converter", "DC-DC converter"], ["48V / 12V 300W แบบ Non-Isolated", "48V / 12V 300W, non-isolated"]],
        [["แบตเตอรี่", "Battery"], ["สั่งรถพร้อมแบตเตอรี่ได้ (ความจุ: สอบถามฝ่ายขาย)", "Available with battery (capacity: ask sales)"]],
      ],
    },
    {
      g: ["ตัวถังและภายนอก", "Body & exterior"],
      rows: [
        [["วัสดุตัวถัง", "Body material"], ["PP เกรดงานยานยนต์ ขึ้นรูปด้วยระบบ Injection Molding", "Automotive-grade PP, injection moulded"]],
        [["หลังคา", "Roof"], ["Blister พ่นสีทั้งสองด้าน พร้อมมือจับหลังคา", "Blister roof painted on both sides, with roof grab handles"]],
        [["สีตัวรถ", "Paint"], ["สีเงา (Gloss) เลือกเฉดสีตาม RAL ได้", "Gloss finish; shades can be matched to RAL"]],
        [["กระจกบังลมหน้า", "Windshield"], ["อะคริลิกแบบพับได้ ผ่านมาตรฐาน DOT สีใส", "Foldable clear acrylic, DOT-approved"]],
        [["กระจกมองข้าง", "Side mirrors"], ["ซ้าย–ขวา ปรับด้วยมือและพับเก็บได้", "Left and right, manually adjustable and foldable"]],
        [["กันชน", "Bumpers"], ["กันชนหน้าพลาสติก และกันชนหลัง", "Plastic front bumper and rear bumper"]],
      ],
    },
    {
      g: ["ห้องโดยสาร", "Cabin"],
      rows: [
        [["จำนวนที่นั่ง", "Seating"], ["6 ที่นั่งหันหน้า + 2 ที่นั่งด้านหลังแบบพับได้ (รวม 8 ที่นั่ง)", "6 forward-facing seats + 2 rear folding seats (8 in total)"]],
        [["เบาะหลังพับ 2-in-1", "2-in-1 rear folding seat"], ["มี", "Yes"]],
        [["เบาะนั่ง", "Seats"], ["เบาะมาตรฐานพร้อมที่วางแขนพลาสติก", "Standard seats with plastic armrests"]],
        [["อุปกรณ์ภายในห้องโดยสาร", "Cabin equipment"], ["เข็มขัดนิรภัย พรมปูพื้น กระจกมองหลังภายใน", "Seat belts, floor mat, interior rear-view mirror"]],
      ],
    },
    {
      g: ["ไฟส่องสว่างและความปลอดภัย", "Lighting & safety"],
      rows: [
        [["ไฟหน้า LED", "LED headlamps"], ["ไฟต่ำ / ไฟสูง / ไฟเลี้ยว / ไฟหรี่", "Low beam / high beam / turn signal / position light"]],
        [["ไฟท้าย LED", "LED tail lamps"], ["ไฟเบรก / ไฟหรี่ / ไฟเลี้ยว", "Brake / position / turn signal"]],
        [["เสียงเตือน", "Audible warnings"], ["แตร และสัญญาณเสียงถอยหลัง", "Horn and reverse alarm"]],
      ],
    },
    {
      g: ["หน้าปัดและความบันเทิง", "Dashboard & entertainment"],
      rows: [
        [["หน้าจอกลาง", "Centre screen"], ["จอ LCD 10.9 นิ้ว รองรับ Wireless CarPlay", "10.9-inch LCD with Wireless CarPlay"]],
        [["หน้าปัดผู้ขับขี่", "Driver display"], ["หน้าปัด LCD ทรงกลม แสดงความเร็วหน่วยกม./ชม.", "Round LCD, speed in km/h"]],
        [["การเชื่อมต่อ", "Connectivity"], ["USB, Bluetooth, Wireless Charger", "USB, Bluetooth, wireless charger"]],
        [["ลำโพง", "Speakers"], ["ลำโพงกันน้ำ 2 ตัว", "2 waterproof speakers"]],
        [["คอนโซลและสวิตช์", "Console & switches"], ["ที่วางแก้ว ช่องจ่ายไฟ 12V นาฬิกาควอตซ์ / สวิตช์กุญแจไฟฟ้า ไฟเลี้ยว เกียร์ ไฟฉุกเฉิน", "Cup holders, 12V outlet, quartz clock / electric key switch, turn signal, gear and hazard switches"]],
      ],
    },
    {
      g: ["พวงมาลัย เบรก และช่วงล่าง", "Steering, brakes & suspension"],
      rows: [
        [["พวงมาลัย", "Steering"], ["Dual-gear Rack & Pinion พร้อมระบบชดเชยระยะฟรีอัตโนมัติ", "Dual-gear rack & pinion with automatic backlash compensation"]],
        [["เบรกหลัก", "Service brakes"], ["ดิสก์เบรกไฮดรอลิก 4 ล้อ แบบวงจรคู่", "Dual-circuit four-wheel hydraulic disc brakes"]],
        [["เบรกจอด", "Parking brake"], ["ระบบเบรกจอดแบบแม่เหล็กไฟฟ้า", "Electromagnetic parking brake"]],
        [["ช่วงล่างหน้า", "Front suspension"], ["อิสระแบบ Double Wishbone พร้อมคอยล์สปริง", "Independent double wishbone with coil springs"]],
        [["ช่วงล่างหลัง", "Rear suspension"], ["Trailing Arm พร้อมคอยล์สปริง", "Trailing arm with coil springs"]],
        [["อัตราทดเฟืองท้าย", "Final drive ratio"], ["12.31", "12.31"]],
      ],
    },
    {
      g: ["ล้อและยาง", "Wheels & tyres"],
      rows: [
        [["ล้อและยาง", "Wheels & tyres"], ["ล้ออัลลอยอะลูมิเนียม 12 นิ้ว พร้อมยางถนน (Road Tire)", "12-inch aluminium alloy wheels with road tyres"]],
      ],
    },
    {
      g: ["ข้อมูลที่ยังไม่เผยแพร่", "Not yet published"],
      rows: [
        [["ความเร็วสูงสุด", "Top speed"], ASK],
        [["ระยะทางต่อการชาร์จ", "Range per charge"], ASK],
        [["ความจุแบตเตอรี่", "Battery capacity"], ASK],
        [["ขนาดและน้ำหนัก", "Dimensions & weight"], ASK],
        [["ราคา", "Price"], ASK],
      ],
    },
  ],
  accessories: [
    [["สีด้าน (Matt)", "Matt colour"], null],
    [["สีเมทัลลิก (Metallic)", "Metallic colour"], null],
    [["ซับวูฟเฟอร์", "Subwoofer"], null],
    [["ไฟ Ambient LED", "Ambient LED lighting"], null],
    [["ลำโพงเพิ่มเติม", "Additional speakers"], null],
    [["Soundbar", "Soundbar"], null],
    [["ไฟส่องป้ายทะเบียน", "Licence-plate light"], null],
    [["ที่วางถุงกอล์ฟพร้อมมือจับ", "Golf-bag rack with handle"], null],
    [["ม่านกันฝนแบบใส", "See-through rain curtain"], ["อยู่ระหว่างยืนยันรายละเอียดและราคา", "Details and price being confirmed"]],
  ],
};
