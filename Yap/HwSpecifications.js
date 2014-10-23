function Ram(_name,_model,_type,_size,_frequency,_voltage,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.type = _type;
	this.size = _size;
	this.frequency = _frequency;
	this.voltage = _voltage;
	this.price = _price;
	this.rating = _rating;
}

function Processor(_name,_model,_core,_thread,_clockspd,_maxfreq,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.core = _core;
	this.thread = _thread;
	this.clockspd = _clockspd;
	this.maxfreq = _maxfreq;
	this.price = _price;
	this.rating = _rating;
}

function VideoCard(_name,_gpu,_type,_clockspd,_memory,_bus,_price,_rating){
	this.name = _name;
	this.gpu = _gpu;
	this.type = _type;
	this.clockspd = _clockspd;
	this.memory = _memory;
	this.bus = _bus;
	this.price = _price;
	this.rating = _rating;
}

function HardDrive(_name,_model,_size,_type,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.size = _size;
	this.type = _type;
	this.price = _price;
	this.rating = _rating;
}

function OpticalDrive(_name,_model,_writespeed,_readspeed,_type,_features,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.writespeed = _writespeed;
	this.readspeed = _readspeed;
	this.type = _type;
	this.features = _features;
	this.price = _price;
	this.rating = _rating;
}

function PowerSupply(_name,_model,_type,_maxpower,_modular,_efficiency,_connectors,_features,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.type = _type;
	this.maxpower = _maxpower;
	this.modular = _modular;
	this.efficiency = _efficiency;
	this.connectors = _connectors;
	this.features = _features;
	this.price = _price;
	this.rating = _rating;
}

function Monitor(_name,_size,_resolution,_contrastratio,_brightness,_voltage,_dimension,_price,_rating){
	this.name = _name;
	this.size = _size;
	this.resolution = _resolution;
	this.contrastratio = _contrastratio;
	this.brightness = _brightness;
	this.voltage = _voltage;
	this.dimension = _dimension;
	this.price = _price;
	this.rating = _rating;
}

function Keyboard(_name,_model,_type,_backlit,_wireless,_numpad,_mmkeys,_price,_rating){
	this.name = _name;
	this.model = _model;
	this.type = _type;
	this.backlit = _backlit;
	this.wireless = _wireless;
	this.numpad = _numpad;
	this.mmkeys = _mmkeys;
	this.price = _price;
	this.rating = _rating;
}

function Mouse(_name,_type,_noofbuttons,_wireless,_scrollwheel,_orientation,_sensor,_price,_rating){
	this.name = _name;
	this.type = _type;
	this.noofbuttons = _noofbuttons;
	this.wireless = _wireless;
	this.scrollwheel = _scrollwheel;
	this.orientation = _orientation;
	this.sensor = _sensor;
	this.price = _price;
	this.rating = _rating;
}


var ram1 = new Ram("G.SKILL RIPJAWSX 8GB 1600MHz", "F3-12800CL10S-8GBXL", "DDR3", "8gb", "1600Mhz", "1.5V", "4000", "5");
var ram2 = new Ram("Kingston HyperX BLU 8GB 1600MHZ", "KHX1600C10D3B1/8G", "DDR3", "8gb", "1600Mhz", "1.5V", "3850", "5");
var ram3 = new Ram("Corsair 4GB XMS3 DDR3 1600", "CMX4GX3M1A1600C9", "DDR3", "4gb", "1600Mhz", "1.65V", "2200", "4.5");

var processor1 = new Processor("Intel Core i7-4770K Processor", "i7-4770k", "4", "8", "3.5Ghz", "3.9Ghz", "15550", "5");
var processor2 = new Processor("Intel Core i5-4670K Processor", "i5-4670K", "4", "4", "3.4Ghz", "3.8Ghz", "10800", "4.5");
var processor3 = new Processor("Intel Core i3-4130 Processor", "i3-4130", "2", "4", "3.4Ghz", "", "4995", "4");

var videoCard1 = new VideoCard("Palit GTX 750 1GB DDR5 128bit OC STORMX Graphics Card", "GeForce® GTX 750", "GDDR5", "1085MHz", "1Gb", "PCI-E 3.0 16x", "5500", "4.5");
var videoCard2 = new VideoCard("Powercolor HD7850 1GB GDDR5 256bit", "RADEON HD7850", "DDR5", "860Mhz", "1Gb", "PCI-E 3.0", "5850", "4");
var videoCard3 = new VideoCard("MSI GTX760 Twin FROZR IV OC 2GB DDR5 256bit", "NVIDIA GeForce GTX 760", "GDDR5", "1085Mhz", "2Gb", "PCI-E 3.0 16x", "12950", "5");

var hardDrive1 = new HardDrive("Seagate 500Gb 7200RPM 3.5 SATA", "ST500DM002", "500Gb", "SATA 6Gb/s", "2300", "4");
var hardDrive2 = new HardDrive("Western Digital 1Tb BLUE 3.5 SATA", "WD10EZEX - BLUE", "1Tb", "SATA 6Gb/s", "2700", "4.5");
var hardDrive3 = new HardDrive("Seagate 2Tb 7200RPM 3.5 SATA", "ST2000DM001", "2Tb", "SATA 6Gb/s", "4000", "4.5");

var opticalDrive1 = new OpticalDrive("Samsung 22X SH-S223 SATA", "SH-S223C", "-DVD+R Write22x @ 29.7 MB/sec </br> -DVD-R Write22x @ 29.7 MB/sec </br> -DVD+R Dual Layer Write 16x @ 21.6 MB/sec </br> -DVD-R Dual Layer Write 12x @ 16.2 MB/sec </br> -DVD+RW Write 8x @ 10.8 MB/sec </br> DVD-RW Write 6x @ 8.1 MB/sec </br> -DVD-RAM Write 12x @ 16.2 MB/sec </br> -CD-RW Write32x @ 4.8MB/sec", "-DVD+R Read 16x 21.6 MB/sec </br> -DVD-R Read 16x 21.6 MB/sec </br> -DVD+R Dual Layer Read 12x @ 16.2 MB/sec </br> -DVD-R Dual Layer Read 12x @ 16.2 MB/sec </br> -DVD+RW Read 12x @ 16.2 MB/sec </br> -DVD-RW Read 12x @ 16.2 MB/sec </br> -DVD-RAM Read 12x @ 16.2 MB/sec </br> -DVD-ROM Read 16x @ 21.6 MB/sec </br> -CD-ROM Read 48x @ 7.2 MB/sec </br> -CD-R Read 40x @ 6.0 MB/sec </br> -CD-RW Read 40x @ 4.0 MB/sec", "SATA", "-SpeedPlus™ powerful over-speed technology for 22X writing </br> -Speed Adjustment Technology </br> -Tilt Actuator Compensation Technology (T.A.C.T.) </br> -Double OPC (Optimum Power Control) in DVD+R </br> -Eco-product: RoHS compliant", "850", "4");
var opticalDrive2 = new OpticalDrive("LITEON IHAS-124 24X SATA Black", "iHAS124", "-DVD+R 24X </br> -DVD+R DL 12X </br> -CD-R 48X", "-DVD+ROM 16X </br> -CD-ROM 48X", "SATA", "-Serial ATA (SATA) connectivity </br> -SMART-BURN </br> -ABS System </br> -Super AllWrite </br> -Smart-X", "800", "4");
var opticalDrive3 = new OpticalDrive("LG GH24NS90 24X SATA Black", "GH24NS90", "-DVD+R 24x </br> -DVD+R DL 8x </br> -DVD-R 24x </br> -DVD-R DL 8x </br> -DVD+RW 8x </br> -DVD-RW 6x </br> -DVD-RAM 12x </br> -CD-R 48x </br> -CD-RW - 32x", "-DVD±R 16x </br> -DVD±R DL 12x </br> -DVD±RW 13x </br> -DVD-ROM 16x </br> -CD-ROM/R 48x </br> -CD-RW 40x", "SATA", "-24X Writing Speed </br> -Superior Data Protection with M-DISC™ Support </br> -Play in Peace </br> -Nonstop Playability </br> -SATA", "880", "4");

var powersupply1 = new PowerSupply("Thermaltake Litepower 500W Black Edition Power Supply", "LT-500NL2NL", "ATX 12V 2.3", "500W", "No", "70%", "-1 x 20+4 pin </br> -1 x 4+4 EPS/ ATX 12v </br> -2 x 6+2 PCI-e </br> -4 x 4pin peripherals </br> -1 x 4pin Floppy </br> -5 x sata", "-High current single +12V rail for best compatibility. </br> -Ultra-quiet 120mm cooling fan delivers excellent airflow. </br> -Extra long EPS/ATX 12V 4+4pin CPU cable support full tower chassis. </br> -Intel & AMD CPU compliant. </br> -Nvidia & ATI/AMD graphic card compatible. </br> -Dimension (W/H/D): 150mm x 85.1mm x 141mm. </br> -High reliability: MTBF>100,000 hours. </br> -Built-in industry grade protections: Over Voltage, Over Power and Short-Circuit protection </br> -Safety / EMI Approvals: TUV, CE, GOST", "1750", "4.5");
var powersupply2 = new PowerSupply("Silverstone Strider Essentials SLI 80P+ 500W Power Supply", "SST-ST50F-ES", "ATX 12V 2.3", "500W", "No", "80+%", "-1 x 24 / 20-Pin connector </br> -1 x 8 / 4-Pin EPS / ATX 12V connector </br> -1 x 8/6-Pin PCIE connector </br> -1 x 6-Pin PCIE connector </br> -4 x SATA connector </br> -3 x 4-Pin Peripheral connector </br> -1 x 4-Pin Floppy connector", "-High efficiency with 80 PLUS certification </br> -500W 24hour continuous power output with 40 operating temperature </br> -Class-leading single +12V rail with 34A </br> -Multiple protection circuitry </br> -Silent running 120mm fan with 18dBA minimum </br> -PCI-E 8pin and PCI-E 6pin connectors support </br> -Support ATX 12V 2.3 </br> -Active PFC", "2850", "4.5");
var powersupply3 = new PowerSupply("Seasonic S12II-520 520W 80+BRONZE Power Supply", "S12II 520 Bronze", "ATX12V V2.3 / EPS 12V V2.91", "520W", "Yes", "80+% Bronze", "-1 x main connector (20+4pin) </br> -1 x 4/8-pin ATX 12v/ EPS12v </br> -1 x 8-pin EPS12v </br> -6 x peripherals </br> -6 x sata </br> -2 x floppy </br> -2 x PCI-e", "-Super high efficiency up to 87% </br> -Highly reliable 105 degree celcius Japannese brand capacitors </br> -520w power with Ample +12v output </br> -Active Power Factor Correction (99% PF typical) </br> -Double Forward Converter Design) </br> -Smart & Silent fan control </br> -12cm ball bearing cooling fan </br> -Soft-mount rubber cushions </br> -Universal Video card support </br> -Patended Easy swap connectors </br> -Universal AC input (full range) </br> -Ultra ventilation (honey comb structure) </br> -5year warranty","2700", "4.5");

var monitor1 = new Monitor("ViewSonic 16&quot; LED VA1601W BLK Monitor", "15.6 inches", "1366 x 768 pixels", "600:1", "220 cd/m2 (typ)", "AC 100 - 240V ; 50/60 Hz", "376.8mm x 299.1mm x 170mm", "2750", "4.5");
var monitor2 = new Monitor("Samsung 20&quot; S20B300 LED BLK Monitor", "20 inches", "1600 x 900 pixels", "Mega ∞ DCR Static 1,000:1", "250 cd/m2", "100 - 240V", "478 x 365 x 177mm", "4650", "4.5");
var monitor3 = new Monitor("BenQ 19.5&quot; BQ GL2023A Widescreen LED Monitor", "19.5 inches", "1600 x 900 pixels", "600:1", "200 cd/m2", "90~264 AC", "359 x 477 x 165", "4150", "4.5");

var keyboard1 = new Keyboard("A4Tech KRS-83 PS/2 Black Keyboard", "KRS-83", "PS/2", "No", "No", "Yes", "No", "340", "3.5");
var keyboard2 = new Keyboard("Logitech K120 USB Black Keyboard", "K120", "USB", "No", "No", "Yes", "No", "430", "3.5");
var keyboard3 = new Keyboard("Genius KB110 USB Black Keyboard", "KB110 USB", "USB", "No", "No", "Yes", "No", "240", "3.5");

var mouse1 = new Mouse("A4Tech N-320 Padless USB Gray Mouse", "USB", "3 Buttons", "No", "Yes", "Ambidextrous", "Optical", "350", "3.5");
var mouse2 = new Mouse("Logitech B100 USB BLK Mouse", "USB", "3 Buttons", "No", "Yes", "Ambidextrous", "Optical", "240", "3.5");
var mouse3 = new Mouse("Genius Netscroll 120 Optical PS2 Black Mouse", "PS/2", "3 Buttons", "No", "Yes", "Ambidextrous", "Optical", "160", "3");