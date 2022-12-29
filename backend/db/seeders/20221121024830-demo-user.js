'use strict';
const bcrypt = require("bcryptjs");

// {
//   firstName: '',
//   lastName: '',
//   username: '',
//   hashedPassword: bcrypt.hashSync(''),
//   email: '@appacademy.io',
//   url: ,
// },

const demoUsers = [
  /********************** 1. Demo **********************/
  {
    // id: 1,
    firstName: 'Smart Shopper',
    lastName: ' ',
    username: 'SmartShopper',
    hashedPassword: bcrypt.hashSync('demoPassword'),
    email: 'demo@email.com',
    url: 'https://www.appacademy.io/',
  },
  /********************** 2. Module Leads **********************/
  {
    // id: 2,
    firstName: 'Bill',
    lastName: 'Adams',
    username: 'wadams',
    hashedPassword: bcrypt.hashSync('wadams'),
    email: 'wadams@appacademy.io',
    url: 'https://www.linkedin.com/in/bill-adams-40869120b/',
  },
  {
    // id: 3,
    firstName: 'Jeff',
    lastName: 'Granoff',
    username: 'jgranoff',
    hashedPassword: bcrypt.hashSync('jgranoff'),
    email: 'jgranoff@appacademy.io',
    url: 'https://www.linkedin.com/in/jlgranof/',
  },
  {
    // id: 4,
    firstName: 'Shane',
    lastName: 'Wilkey',
    username: 'swilkey',
    hashedPassword: bcrypt.hashSync('swilkey'),
    email: 'swilkey@appacademy.io',
    url: 'https://www.linkedin.com/in/shane-wilkey-b5822b210/',
  },
  {
    // id: 5,
    firstName: 'Geoffrey',
    lastName: 'Otieno',
    username: 'gotieno',
    hashedPassword: bcrypt.hashSync('gotieno'),
    email: 'gotieno@appacademy.io',
    url: 'https://www.linkedin.com/in/geoffrey-otieno-57015966/',
  },
  {
    // id: 6,
    firstName: 'Alec',
    lastName: 'Keeler',
    username: 'akeeler',
    hashedPassword: bcrypt.hashSync('akeeler'),
    email: 'akeeler@appacademy.io',
    url: 'https://www.linkedin.com/in/alec-keeler-a8499083/',
  },
  {
    // id: 7,
    firstName: 'Dan',
    lastName: 'Purcell',
    username: 'dpurcell',
    hashedPassword: bcrypt.hashSync('dpurcell'),
    email: 'dpurcell@appacademy.io',
    url: 'https://www.linkedin.com/in/dan-purcell-fifteen/',
  },
  {
    // id: 8,
    firstName: 'Brad',
    lastName: 'Simpson',
    username: 'bsimpson',
    hashedPassword: bcrypt.hashSync('bsimpson'),
    email: 'bsimpson@appacademy.io',
    url: 'https://www.linkedin.com/in/brad-simpson-a6b1b7b2/',
  },
  {
    // id: 9,
    firstName: 'Hector',
    lastName: 'Crespo',
    username: 'hcrespo',
    hashedPassword: bcrypt.hashSync('hcrespo'),
    email: 'hcrespo@appacademy.io',
    url: 'https://www.linkedin.com/in/hector-crespo-b0b5b019a/',
  },

  /********************** 3. TA's **********************/
  {
    // id: 10,
    firstName: 'Cody',
    lastName: 'Lavene',
    username: 'clavene',
    hashedPassword: bcrypt.hashSync('clavene'),
    email: 'clavene@appacademy.io',
    url: 'https://www.linkedin.com/in/codylavene/',
  },
  {
    // id: 11,
    firstName: 'Cameron',
    lastName: 'Whiteside',
    username: 'cwhiteside',
    hashedPassword: bcrypt.hashSync('cwhiteside'),
    email: 'cwhiteside@appacademy.io',
    url: 'https://www.linkedin.com/in/cameronwhiteside/',
  },
  {
    // id: 12,
    firstName: 'Peter',
    lastName: 'Shin',
    username: 'pshin',
    hashedPassword: bcrypt.hashSync('pshin'),
    email: 'pshin@appacademy.io',
    url: 'https://www.linkedin.com/in/petershin731/',
  },
  {
    // id: 13,
    firstName: 'Braxton',
    lastName: 'Kappes',
    username: 'bkappes',
    hashedPassword: bcrypt.hashSync('bkappes'),
    email: 'bkappes@appacademy.io',
    url: 'https://www.linkedin.com/in/braxton-kappes-b68984119/',
  },
  {
    // id: 14,
    firstName: 'Jesse',
    lastName: 'Christensen',
    username: 'jchristensen',
    hashedPassword: bcrypt.hashSync('jchristensen'),
    email: 'jchristensen@appacademy.io',
    url: 'https://www.linkedin.com/in/jesse-christensen-204801232/',
  },
  {
    // id: 15,
    firstName: 'Jojo',
    lastName: 'Yih',
    username: 'jyih',
    hashedPassword: bcrypt.hashSync('jyih'),
    email: 'jyih@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 16,
    firstName: 'Nick',
    lastName: 'Esqueda',
    username: 'nesqueda',
    hashedPassword: bcrypt.hashSync('nesqueda'),
    email: 'nesqueda@appacademy.io',
    url: 'https://www.linkedin.com/in/nick-esqueda/',
  },
  {
    // id: 17,
    firstName: 'Andrew',
    lastName: 'Fava',
    username: 'afava',
    hashedPassword: bcrypt.hashSync('afava'),
    email: 'afava@appacademy.io',
    url: 'https://www.linkedin.com/in/andrewfava/',
  },
  {
    // id: 18,
    firstName: 'Ari',
    lastName: 'Robinson',
    username: 'arobinson',
    hashedPassword: bcrypt.hashSync('arobinson'),
    email: 'arobinson@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 19,
    firstName: 'Sam',
    lastName: 'Song',
    username: 'ssong',
    hashedPassword: bcrypt.hashSync('ssong'),
    email: 'ssong@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 20,
    firstName: 'Tanner',
    lastName: 'Shaw',
    username: 'tshaw',
    hashedPassword: bcrypt.hashSync('tshaw'),
    email: 'tshaw@appacademy.io',
    url: 'https://www.linkedin.com/in/jtannershaw/',
  },
  {
    // id: 21,
    firstName: 'Olivia',
    lastName: 'Bir',
    username: 'obir',
    hashedPassword: bcrypt.hashSync('obir'),
    email: 'obir@appacademy.io',
    url: 'https://www.linkedin.com/in/olivia-bir-74b16b7b/',
  },
  {
    // id: 22,
    firstName: 'Nate',
    lastName: 'Treadaway',
    username: 'ntreadway',
    hashedPassword: bcrypt.hashSync('ntreadway'),
    email: 'ntreadway@appacademy.io',
    url: 'https://www.linkedin.com/in/nathan-treadaway/',
  },
  {
    // id: 23,
    firstName: 'Daniel',
    lastName: 'Chin',
    username: 'dchin',
    hashedPassword: bcrypt.hashSync('dchin'),
    email: 'dchin@appacademy.io',
    url: 'https://www.linkedin.com/in/bongochin/',
  },
  {
    // id: 24,
    firstName: 'Alex',
    lastName: 'Pezzati',
    username: 'apezzati',
    hashedPassword: bcrypt.hashSync('apezzati'),
    email: 'apezzati@appacademy.io',
    url: 'https://www.linkedin.com/in/alex-pezzati/',
  },
  {
    // id: 25,
    firstName: 'Sherry',
    lastName: 'Yu',
    username: 'syu',
    hashedPassword: bcrypt.hashSync('syu'),
    email: 'syu@appacademy.io',
    url: 'https://www.linkedin.com/in/xiaozhuyu/',
  },
  {
    // id: 26,
    firstName: 'Rawaha',
    lastName: 'Memon',
    username: 'rmemon',
    hashedPassword: bcrypt.hashSync('rmemon'),
    email: 'rmemon@appacademy.io',
    url: 'https://www.linkedin.com/in/rawaha-m-b280a4204/',
  },
  {
    // id: 27,
    firstName: 'Whit',
    lastName: 'Minson',
    username: 'wminson',
    hashedPassword: bcrypt.hashSync('wminson'),
    email: 'wminson@appacademy.io',
    url: 'https://www.linkedin.com/in/whitneylynnminson/',
  },
  {
    // id: 28,
    firstName: 'Daniel',
    lastName: 'Flores',
    username: 'dflores',
    hashedPassword: bcrypt.hashSync('dflores'),
    email: 'dflores@appacademy.io',
    url: 'https://www.linkedin.com/in/daniel-flores-764a0b21b/',
  },
  {
    // id: 29,
    firstName: 'David',
    lastName: 'Nash',
    username: 'dnash',
    hashedPassword: bcrypt.hashSync('dnash'),
    email: 'dnash@appacademy.io',
    url: 'https://www.linkedin.com/in/david-nash-9ba507217/',
  },
  {
    // id: 30,
    firstName: 'John',
    lastName: 'Lee',
    username: 'jlee',
    hashedPassword: bcrypt.hashSync('jlee'),
    email: 'jlee@appacademy.io',
    url: 'https://www.linkedin.com/in/jwily/',
  },
  {
    // id: 31,
    firstName: 'Andrew',
    lastName: 'Tran',
    username: 'atran',
    hashedPassword: bcrypt.hashSync('atran'),
    email: 'atran@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 32,
    firstName: 'Cesar',
    lastName: 'Solano',
    username: 'csolano',
    hashedPassword: bcrypt.hashSync('csolano'),
    email: 'csolano@appacademy.io',
    url: 'https://www.linkedin.com/in/171cas/',
  },
  {
    // id: 33,
    firstName: 'Ryan',
    lastName: 'Schneider',
    username: 'rschneider',
    hashedPassword: bcrypt.hashSync('rschneider'),
    email: 'rschneider@appacademy.io',
    url: 'https://www.linkedin.com/in/ryan-schneider-90830a217/',
  },
  {
    // id: 34,
    firstName: 'Anthony',
    lastName: 'Lovern',
    username: 'alovern',
    hashedPassword: bcrypt.hashSync('alovern'),
    email: 'alovern@appacademy.io',
    url: 'https://www.linkedin.com/in/anthonylovern/',
  },
  {
    // id: 35,
    firstName: 'Franco',
    lastName: 'Portin',
    username: 'fportin',
    hashedPassword: bcrypt.hashSync('fportin'),
    email: 'fportin@appacademy.io',
    url: 'https://www.linkedin.com/in/franco-portin/',
  },
  {
    // id: 36,
    firstName: 'Kevin',
    lastName: 'Bartolome',
    username: 'kbartolome',
    hashedPassword: bcrypt.hashSync('kbartolome'),
    email: 'kbartolome@appacademy.io',
    url: 'https://www.linkedin.com/in/kevin-bartolome/',
  },

  /********************** 4. Cohort Leads **********************/
  {
    // id: 37,
    firstName: 'David',
    lastName: 'DeHerrera',
    username: 'ddeherrera',
    hashedPassword: bcrypt.hashSync('ddeherrera'),
    email: 'ddeherrera@appacademy.io',
    url: 'https://www.linkedin.com/in/david-deherrera-441678208/',
  },
  {
    // id: 38,
    firstName: 'Drew',
    lastName: 'Thurman',
    username: 'athruman',
    hashedPassword: bcrypt.hashSync('athruman'),
    email: 'athruman@appacademy.io',
    url: 'https://www.linkedin.com/in/drew-thurman/',
  },
  {
    // id: 39,
    firstName: 'David',
    lastName: 'Rogers',
    username: 'drogers',
    hashedPassword: bcrypt.hashSync('drogers'),
    email: 'drogers@appacademy.io',
    url: 'https://www.linkedin.com/in/david-rogers-b71595227/',
  },
  {
    // id: 40,
    firstName: 'Ryan',
    lastName: 'Webster',
    username: 'rwebster',
    hashedPassword: bcrypt.hashSync('rwebster'),
    email: 'rwebster@appacademy.io',
    url: 'https://www.linkedin.com/in/ryan-webster-a784509b/',
  },

  /********************** 5. Students **********************/
  {
    // id: 41,
    firstName: 'Jair',
    lastName: 'Carbajal',
    username: 'jcarbajal',
    hashedPassword: bcrypt.hashSync('jcarbajal'),
    email: 'jcarbajal@appacademy.io',
    url: 'https://www.linkedin.com/in/jair-carbajal/',
  },
  {
    // id: 42,
    firstName: 'Tiffany',
    lastName: 'Yang',
    username: 'tyang',
    hashedPassword: bcrypt.hashSync('tyang'),
    email: 'tyang@appacademy.io',
    url: 'https://www.linkedin.com/in/tiffany-yang-373140133/',
  },
  {
    // id: 43,
    firstName: 'Daniel',
    lastName: 'Lam',
    username: 'lain',
    hashedPassword: bcrypt.hashSync('dlam'),
    email: 'dlam@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 44,
    firstName: 'Connor',
    lastName: 'Lam',
    username: 'clam',
    hashedPassword: bcrypt.hashSync('clam'),
    email: 'clam@appacademu.io',
    url: 'https://www.linkedin.com/in/connor-lam-a6545a23b/',
  },
  {
    // id: 45,
    firstName: 'Gary',
    lastName: 'Song',
    username: 'hustling',
    hashedPassword: bcrypt.hashSync('gsong'),
    email: 'gsong@appacademy.io',
    url: 'https://www.linkedin.com/in/song-gary/',
  },
  {
    // id: 46,
    firstName: 'Jake',
    lastName: 'Matillano',
    username: 'doofey',
    hashedPassword: bcrypt.hashSync('jmatillano'),
    email: 'jmatillano@appacademy.io',
    url: 'https://www.linkedin.com/in/jake-matillano/',
  },
  {
    // id: 47,
    firstName: 'John',
    lastName: 'Carrera',
    username: 'badreg',
    hashedPassword: bcrypt.hashSync('jcarrera'),
    email: 'jcarrera@appacademy.io',
    url: 'https://www.linkedin.com/in/johncarrera/',
  },
  {
    // id: 48,
    firstName: 'Maliha',
    lastName: 'Omair',
    username: 'maliha',
    hashedPassword: bcrypt.hashSync('momair'),
    email: 'momair@appacademy.io',
    url: 'https://www.linkedin.com/in/maliha-omair/',
  },
  {
    // id: 49,
    firstName: 'Thenu',
    lastName: 'Nachiyappan',
    username: 'thenu',
    hashedPassword: bcrypt.hashSync('tnachiyappan'),
    email: 'tnachiyappan@appacademy.io',
    url: 'https://www.linkedin.com/in/thenammai-nachiyappan-56bbaa1a2/',
  },
  {
    // id: 50,
    firstName: 'Brennon',
    lastName: 'Morris',
    username: 'BrennonMorris',
    hashedPassword: bcrypt.hashSync('bmorris'),
    email: 'bmorris@appacademy.io',
    url: 'https://www.linkedin.com/in/brennonmorris/',
  },
  {
    // id: 51,
    firstName: 'Logan',
    lastName: 'Seals',
    username: 'SealOfApproval',
    hashedPassword: bcrypt.hashSync('lseals'),
    email: 'lseals@appacademy.io',
    url: 'https://www.linkedin.com/in/loganseals/',
  },
  {
    // id: 52,
    firstName: 'Alex',
    lastName: 'Klivecka',
    username: 'aklivecka',
    hashedPassword: bcrypt.hashSync('aklivecka'),
    email: 'aklivecka@appacademy.io',
    url: 'https://www.linkedin.com/in/alexander-klivecka-047221199/',
  },
  {
    // id: 53,
    firstName: 'Jackson',
    lastName: 'Fisher',
    username: 'fisjack',
    hashedPassword: bcrypt.hashSync('jfisher'),
    email: 'jfisher@appacademy.io',
    url: 'https://github.com/fisjac',
  },
  {
    // id: 54,
    firstName: 'Tom',
    lastName: 'Bluher',
    username: 'tbluher',
    hashedPassword: bcrypt.hashSync('tbluher'),
    email: 'tbluher@appacademy.io',
    url: 'https://www.linkedin.com/in/tom-bluher-172321115/',
  },
  {
    // id: 55,
    firstName: 'Andrew',
    lastName: 'Kay',
    username: 'rewd',
    hashedPassword: bcrypt.hashSync('akay'),
    email: 'akay@appacademy.io',
    url: 'https://www.linkedin.com/in/andrew-k-474479123/',
  },
  {
    // id: 56,
    firstName: 'Adam',
    lastName: 'Selki',
    username: 'Damzzz123',
    hashedPassword: bcrypt.hashSync('aselki'),
    email: 'aselki@appacademy.io',
    url: 'https://github.com/aselk1',
  },
  {
    // id: 57,
    firstName: 'Christopher',
    lastName: 'Pannella',
    username: 'goatedIndeed',
    hashedPassword: bcrypt.hashSync('cpannella'),
    email: 'cpannella@appacademy.io',
    url: 'https://github.com/cpannella',
  },
  {
    // id: 58,
    firstName: 'Christo',
    lastName: 'Grabowski',
    username: 'ChristoGrabowski',
    hashedPassword: bcrypt.hashSync('cgrabowski'),
    email: 'cgrabowski@appacademy.io',
    url: 'https://github.com/ChristoGrab',
  },
  {
    // id: 59,
    firstName: 'Cindy',
    lastName: 'Guzman',
    username: 'Cece',
    hashedPassword: bcrypt.hashSync('cguzman'),
    email: 'cguzman@appacademy.io',
    url: 'https://github.com/c-rose-g',
  },
  {
    // id: 60,
    firstName: 'David',
    lastName: 'Burch',
    username: 'DavidDanielBurch',
    hashedPassword: bcrypt.hashSync('dburch'),
    email: 'dburch@appacademy.io',
    url: 'https://github.com/ddb048',
  },
  {
    // id: 61,
    firstName: 'Eliza',
    lastName: 'Wimberly',
    username: 'ElizaW',
    hashedPassword: bcrypt.hashSync('ewimberly'),
    email: 'ewimberly@appacademy.io',
    url: 'https://github.com/elizawimberly',
  },
  {
    // id: 62,
    firstName: 'James',
    lastName: 'Lee',
    username: 'JamesLee',
    hashedPassword: bcrypt.hashSync('jlee'),
    email: 'jlee@appacademy.io',
    url: 'https://github.com/jameswonlee',
  },
  {
    // id: 63,
    firstName: 'Jason',
    lastName: 'Kong',
    username: 'JasonKong',
    hashedPassword: bcrypt.hashSync('jkong'),
    email: 'jkong@appacademy.io',
    url: 'https://github.com/jrkong216',
  },
  {
    // id: 64,
    firstName: 'Joanna',
    lastName: 'Gilbert',
    username: 'joanna',
    hashedPassword: bcrypt.hashSync('jgilbert'),
    email: 'jgilbert@appacademy.io',
    url: 'https://github.com/jcgilb',
  },
  {
    // id: 65,
    firstName: 'Max',
    lastName: 'Yaswen',
    username: 'MaxYaswen',
    hashedPassword: bcrypt.hashSync('myaswen'),
    email: 'myaswen@appacademy.io',
    url: 'https://github.com/myaswen',
  },
  {
    // id: 66,
    firstName: 'Moran',
    lastName: 'Even',
    username: 'MoranEven',
    hashedPassword: bcrypt.hashSync('meven'),
    email: 'meven@appacademy.io',
    url: 'https://github.com/MEven44',
  },
  {
    // id: 67,
    firstName: 'Yasha',
    lastName: 'Yang',
    username: 'yashaY',
    hashedPassword: bcrypt.hashSync('yyang'),
    email: 'yyang@appacademy.io',
    url: 'https://github.com/yashayang',
  },
  {
    // id: 68,
    firstName: 'Yibo',
    lastName: 'Guo',
    username: 'YiboGuo',
    hashedPassword: bcrypt.hashSync('yguo'),
    url: 'https://github.com/GUOYIBO',
    email: 'yguo@appacademy.io',
  },
  {
    // id: 69,
    firstName: 'Abel',
    lastName: 'Brianvil',
    username: 'abrianvil',
    hashedPassword: bcrypt.hashSync('abrianvil'),
    email: 'abrianvil@appacademy.io',
    url: 'https://github.com/abrianvil',
  },
  {
    // id: 70,
    firstName: 'Aijia',
    lastName: 'Wang',
    username: 'awang',
    hashedPassword: bcrypt.hashSync('awang'),
    email: 'awang@appacademy.io',
    url: 'https://github.com/wangaijia618',
  },
  {
    // id: 71,
    firstName: 'Allen',
    lastName: 'Pham',
    username: 'apham',
    hashedPassword: bcrypt.hashSync('apham'),
    email: 'apham@appacademy.io',
    url: 'https://github.com/Allendpham',
  },
  {
    // id: 72,
    firstName: 'Andrew',
    lastName: 'Wilkinson',
    username: 'awilkinson',
    hashedPassword: bcrypt.hashSync('awilkinson'),
    email: 'awilkinson@appacademy.io',
    url: 'https://github.com/adub671',
  },
  {
    // id: 73,
    firstName: 'Brad',
    lastName: 'Lewter',
    username: 'blewter',
    hashedPassword: bcrypt.hashSync('blewter'),
    email: 'blewter@appacademy.io',
    url: 'https://github.com/DairyDuke',
  },
  {
    // id: 74,
    firstName: 'Caleb',
    lastName: 'Flores',
    username: 'cflores',
    hashedPassword: bcrypt.hashSync('cflores'),
    email: 'cflores@appacademy.io',
    url: 'https://github.com/Cal-Flores',
  },
  {
    // id: 75,
    firstName: 'Calvin',
    lastName: 'Tzeng',
    username: 'ctzeng',
    hashedPassword: bcrypt.hashSync('ctzeng'),
    email: 'ctzeng@appacademy.io',
    url: 'https://progress.appacademy.io/me/students',
  },
  {
    // id: 76,
    firstName: 'Carmelino',
    lastName: 'Galang',
    username: 'cgalang',
    hashedPassword: bcrypt.hashSync('cgalang'),
    email: 'cgalang@appacademy.io',
    url: 'https://github.com/cgalang9',
  },
  {
    // id: 77,
    firstName: 'Jake',
    lastName: 'Lamar',
    username: 'jlamar',
    hashedPassword: bcrypt.hashSync('jlamar'),
    email: 'jlamar@appacademy.io',
    url: 'https://github.com/lamarjd',
  },
  {
    // id: 78,
    firstName: 'Jason',
    lastName: 'Arnold',
    username: 'Denji',
    hashedPassword: bcrypt.hashSync('jarnold'),
    email: 'jarnold@appacademy.io',
    url: 'https://github.com/QuantitativeSneezing',
  },
  {
    // id: 79,
    firstName: 'Jason',
    lastName: 'Premo',
    username: 'jpremo',
    hashedPassword: bcrypt.hashSync('jpremo'),
    email: 'jpremo@appacademy.io',
    url: 'https://github.com/jhpremo',
  },
  {
    // id: 80,
    firstName: 'Jessie',
    lastName: 'Baron',
    username: 'jbaron',
    hashedPassword: bcrypt.hashSync('jbaron'),
    email: 'jbaron@appacademy.io',
    url: 'https://github.com/jbaron94',
  },
  {
    // id: 81,
    firstName: 'Justin',
    lastName: 'Rife',
    username: 'mancussion',
    hashedPassword: bcrypt.hashSync('jrife'),
    email: 'jrife@appacademy.io',
    url: 'https://github.com/JRife458',
  },
  {
    // id: 82,
    firstName: 'Keerthana',
    lastName: 'Yellapragada',
    username: 'kyellapragada',
    hashedPassword: bcrypt.hashSync('kyellapragada'),
    email: 'kyellapragada@appacademy.io',
    url: 'https://github.com/Keerthana-Yellapragada',
  },
  {
    // id: 83,
    firstName: 'Kelly',
    lastName: 'Shao',
    username: 'kshao',
    hashedPassword: bcrypt.hashSync('kshao'),
    email: 'kshao@appacademy.io',
    url: 'https://github.com/keshao728',
  },
  {
    // id: 84,
    firstName: 'Kris',
    lastName: 'Han',
    username: 'khan',
    hashedPassword: bcrypt.hashSync('khan'),
    email: 'khan@appacademy.io',
    url: 'https://github.com/krispikris',
  },
  {
    // id: 85,
    firstName: 'Matt',
    lastName: 'Hutter',
    username: 'mhutter',
    hashedPassword: bcrypt.hashSync('mhutter'),
    email: 'mhutter@appacademy.io',
    url: 'https://github.com/Sparky338',
  },
  {
    // id: 86,
    firstName: 'Na',
    lastName: 'Chen',
    username: 'nchen',
    hashedPassword: bcrypt.hashSync('nchen'),
    email: 'nchen@appacademy.io',
    url: 'https://www.appacademy.io/',
  },
  {
    // id: 87,
    firstName: 'Nate',
    lastName: 'Lumpkin',
    username: 'nlunpkin',
    hashedPassword: bcrypt.hashSync('nlunpkin'),
    email: 'nlunpkin@appacademy.io',
    url: 'https://github.com/natelumpkin',
  },
  {
    // id: 88,
    firstName: 'Richard',
    lastName: 'Baine',
    username: 'mbaine',
    hashedPassword: bcrypt.hashSync('mbaine'),
    email: 'mbaine@appacademy.io',
    url: 'https://github.com/s0618345',
  },
  {
    // id: 89,
    firstName: 'Sam',
    lastName: 'Suh',
    username: 'ssuh',
    hashedPassword: bcrypt.hashSync('ssuh'),
    email: 'ssuh@appacademy.io',
    url: 'https://github.com/Samsuhhh',
  },
  {
    // id: 90,
    firstName: 'Schaeffer',
    lastName: 'Ahn',
    username: 'schae',
    hashedPassword: bcrypt.hashSync('sahn'),
    email: 'sahn@appacademy.io',
    url: 'https://github.com/Schaeffy',
  },
  {
    // id: 91,
    firstName: 'Sean',
    lastName: 'Kennedy',
    username: 'skennedy',
    hashedPassword: bcrypt.hashSync('skennedy'),
    email: 'skennedy@appacademy.io',
    url: 'https://github.com/DevSPK',
  },
  {
    // id: 92,
    firstName: 'Sebastian',
    lastName: 'Antonucci',
    username: 'reptar',
    hashedPassword: bcrypt.hashSync('santonucci'),
    email: 'santonucci@appacademy.io',
    url: 'https://github.com/Reptar007',
  },
  {
    // id: 93,
    firstName: 'Simon',
    lastName: 'Tan',
    username: 'stan',
    hashedPassword: bcrypt.hashSync('stan'),
    email: 'stan@appacademy.io',
    url: 'https://github.com/SimonMTan',
  },
  {
    // id: 94,
    firstName: 'Yasamine',
    lastName: 'Cruz',
    username: 'yas',
    hashedPassword: bcrypt.hashSync('ycruz'),
    email: 'ycruz@appacademy.io',
    url: 'https://github.com/YasamineCruz',
  },
  {
    // id: 95,
    firstName: 'David',
    lastName: 'Chou',
    username: 'dchou',
    hashedPassword: bcrypt.hashSync('dchou'),
    email: 'dchou@appacademy.io',
    url: 'https://github.com/davidchou0112',
  },
  {
    // id: 96,
    firstName: 'Gabriel',
    lastName: 'Day',
    username: 'TomTomDiddy',
    hashedPassword: bcrypt.hashSync('gday'),
    email: 'gday@appacademy.io',
    url: 'https://www.linkedin.com/in/gabriel-day-536738201/',
  },
  {
    // id: 97,
    firstName: 'Erin',
    lastName: 'Omcikus',
    username: 'ErinDuffyOmcikus',
    hashedPassword: bcrypt.hashSync('eomcikus'),
    email: 'eomcikus@appacademy.io',
    url: 'https://www.linkedin.com/in/erin-duffy-omcikus-5641004a/',
  },
  {
    // id: 98,
    firstName: 'Alex',
    lastName: 'Auch',
    username: 'Auchie',
    hashedPassword: bcrypt.hashSync('aauch'),
    email: 'aauch@appacademy.io',
    url: 'https://www.linkedin.com/in/alex-auch-568476a2/',
  },
  {
    // id: 99,
    firstName: 'Alexis',
    lastName: 'West',
    username: 'awest',
    hashedPassword: bcrypt.hashSync('awest'),
    email: 'awest@appacademy.io',
    url: 'https://www.linkedin.com/in/alexis-west-596a6b203/',
  },
  {
    // id: 100,
    firstName: 'Kevin',
    lastName: 'Longboy',
    username: 'Kevinelle',
    hashedPassword: bcrypt.hashSync('klongboy'),
    email: 'klongboy@appacademy.io',
    url: 'kevinlongboy.com',
  },

  /****************/
  {
    // id: 101,
    firstName: 'Alex',
    lastName: 'Feinberg',
    username: 'alex21',
    hashedPassword: bcrypt.hashSync('afeinberg'),
    email: 'afeinberg@appacademy.io',
    url: 'https://github.com/alexanderfeinberg',
  },
  {
    // id: 102,
    firstName: 'Ali',
    lastName: 'Ezzeddine',
    username: 'AbuSharmouta',
    hashedPassword: bcrypt.hashSync('aezzeddine'),
    email: 'aezzeddine@appacademy.io',
    url: 'https://github.com/alkezz',
  },
  {
    // id: 103,
    firstName: 'Ashwin',
    lastName: 'Ramakrishnan',
    username: 'ashwib',
    hashedPassword: bcrypt.hashSync('aramakrishnan'),
    email: 'aramakrishnan@appacademy.io',
    url: 'https://github.com/ashramki96',
  },
  {
    // id: 104,
    firstName: 'Ben',
    lastName: 'Thai',
    username: 'poophead',
    hashedPassword: bcrypt.hashSync('bthai'),
    email: 'bthai@appacademy.io',
    url: 'https://github.com/Benties',
  },
  {
    // id: 105,
    firstName: 'Brin',
    lastName: 'Hoover',
    username: 'BLee',
    hashedPassword: bcrypt.hashSync('bhoover'),
    email: 'bhoover@appacademy.io',
    url: 'https://github.com/TheBabblingBrin',
  },
  {
    // id: 106,
    firstName: 'Casstiel',
    lastName: 'Pi',
    username: 'cas',
    hashedPassword: bcrypt.hashSync('cpi'),
    email: 'cpi@appacademy.io',
    url: 'https://github.com/CasstielP',
  },
  {
    // id: 107,
    firstName: 'Curtis',
    lastName: 'Chung',
    username: 'cchung',
    hashedPassword: bcrypt.hashSync('cchung'),
    email: 'cchung@appacademy.io',
    url: 'https://www.linkedin.com/in/chungcurtis/',
  },
  {
    // id: 108,
    firstName: 'David',
    lastName: 'Siwulec',
    username: 'Zeztyy',
    hashedPassword: bcrypt.hashSync('dsiwulec'),
    email: 'dsiwulec@appacademy.io',
    url: 'https://github.com/dsiwulec',
  },
  {
    // id: 109,
    firstName: 'Dion',
    lastName: 'Pham',
    username: 'dpham',
    hashedPassword: bcrypt.hashSync('dpham'),
    email: 'dpham@appacademy.io',
    url: 'https://github.com/dion-pham',
  },
  {
    // id: 110,
    firstName: 'Frank',
    lastName: 'Song',
    username: 'fsong',
    hashedPassword: bcrypt.hashSync('fsong'),
    email: 'fsong@appacademy.io',
    url: 'https://github.com/NYDF',
  },
  {
    // id: 111,
    firstName: 'Donovan',
    lastName: 'Galloway',
    username: 'dgalloway',
    hashedPassword: bcrypt.hashSync('dgalloway'),
    email: 'dgalloway@appacademy.io',
    url: 'https://github.com/dogallow',
  },
  {
    // id: 112,
    firstName: 'Dylan',
    lastName: 'Luu',
    username: 'dluu',
    hashedPassword: bcrypt.hashSync('dluu'),
    email: 'dluu@appacademy.io',
    url: 'https://github.com/Dylluu',
  },
  {
    // id: 113,
    firstName: 'Jarrod',
    lastName: 'Mishima',
    username: 'jmishima',
    hashedPassword: bcrypt.hashSync('jmishima'),
    email: 'jmishima@appacademy.io',
    url: 'https://www.linkedin.com/in/jarrod-mishima-50abb0172/',
  },
  {
    // id: 114,
    firstName: 'Jenny',
    lastName: 'Jiang',
    username: 'jjiang',
    hashedPassword: bcrypt.hashSync('jjiang'),
    email: 'jjiang@appacademy.io',
    url: 'https://github.com/jenjenkayi',
  },
  {
    // id: 115,
    firstName: 'Jon',
    lastName: 'Park',
    username: 'jpark',
    hashedPassword: bcrypt.hashSync('jpark'),
    email: 'jpark@appacademy.io',
    url: 'https://github.com/jonpark13',
  },
  {
    // id: 116,
    firstName: 'Jwad',
    lastName: 'Aziz',
    username: 'jaziz',
    hashedPassword: bcrypt.hashSync('jaziz'),
    email: 'jaziz@appacademy.io',
    url: 'https://github.com/jwad96',
  },
  {
    // id: 117,
    firstName: 'Kyle',
    lastName: 'Solano',
    username: 'ksolano',
    hashedPassword: bcrypt.hashSync('ksolano'),
    email: 'ksolano@appacademy.io',
    url: 'https://github.com/kgsolano',
  },
  {
    // id: 118,
    firstName: 'Matt',
    lastName: 'Li',
    username: 'mli',
    hashedPassword: bcrypt.hashSync('mli'),
    email: 'mli@appacademy.io',
    url: 'https://github.com/MatthewLi154',
  },
  {
    // id: 119,
    firstName: 'Namju',
    lastName: 'Bae',
    username: 'nbae',
    hashedPassword: bcrypt.hashSync('nbae'),
    email: 'nbae@appacademy.io',
    url: 'https://github.com/Nick-Bae',
  },
  {
    // id: 120,
    firstName: 'Nhut-Linh',
    lastName: 'Ngo',
    username: 'nngo',
    hashedPassword: bcrypt.hashSync('nngo'),
    email: 'nngo@appacademy.io',
    url: 'https://github.com/NhutLinh-Ngo',
  },
  {
    // id: 121,
    firstName: 'Noah',
    lastName: 'Kerner',
    username: 'trundath',
    hashedPassword: bcrypt.hashSync('nkerner'),
    email: 'nkerner@appacademy.io',
    url: 'https://github.com/B1G-M0N3Y',
  },
  {
    // id: 122,
    firstName: 'Noah',
    lastName: 'Winzig',
    username: 'nwinzig',
    hashedPassword: bcrypt.hashSync('nwinzig'),
    email: 'nwinzig@appacademy.io',
    url: 'https://github.com/nwinzig',
  },
  {
    // id: 123,
    firstName: 'Tan',
    lastName: 'Nguyen',
    username: 'tnguyen',
    hashedPassword: bcrypt.hashSync('tnguyen'),
    email: 'tnguyen@appacademy.io',
    url: 'https://github.com/Tan0699',
  },
  {
    // id: 124,
    firstName: 'Trevor',
    lastName: 'Jones',
    username: 'tjones',
    hashedPassword: bcrypt.hashSync('tjones'),
    email: 'tjones@appacademy.io',
    url: 'https://github.com/Trevor1798',
  },
  {
    // id: 125,
    firstName: 'William',
    lastName: 'Ngo',
    username: 'wngo',
    hashedPassword: bcrypt.hashSync('wngo'),
    email: 'wngo@appacademy.io',
    url: 'https://github.com/williamkimngo',
  },
  {
    // id: 126,
    firstName: 'Randy',
    lastName: 'Chang',
    username: 'rchang',
    hashedPassword: bcrypt.hashSync('rchang'),
    email: 'rchang@appacademy.io',
    url: 'https://github.com/randycane',
  },
  {
    // id: 127,
    firstName: 'Christy',
    lastName: 'Xiu',
    username: 'cxiu',
    hashedPassword: bcrypt.hashSync('cxiu'),
    email: 'cxiu@appacademy.io',
    url: 'https://www.linkedin.com/in/zhaoyang-xiu/',
  },
  {
    // id: 128,
    firstName: 'Wes',
    lastName: 'Trinh',
    username: 'wtrinh',
    hashedPassword: bcrypt.hashSync('wtrinh'),
    email: 'wtrinh@appacademy.io',
    url: 'appacademy.io',
  },
  {
    // id: 129,
    firstName: 'Allie',
    lastName: 'Villarreal',
    username: 'avillarreal',
    hashedPassword: bcrypt.hashSync('avillarreal'),
    email: 'avillarreal@appacademy.io',
    url: 'appacademy.io',
  },
  {
    // id: 130,
    firstName: 'Mark',
    lastName: 'Rodriguez',
    username: 'mrodriguez',
    hashedPassword: bcrypt.hashSync('mrodriguez'),
    email: 'mrodriguez@appacademy.io',
    url: 'appacademy.io',
  },
]


let usernames = [];
demoUsers.forEach(user => usernames.push(user.username))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      demoUsers,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      { username: { [Op.in]: usernames } },
      {}
    )
  }
};
