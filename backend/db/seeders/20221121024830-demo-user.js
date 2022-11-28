'use strict';
const bcrypt = require("bcryptjs");

// {
//   firstName: '',
//   lastName: '',
//   username: '',
//   hashedPassword: bcrypt.hashSync(''),
//   email: '@appacademy.io',
// },

const demoUsers = [
  {
    id: 1,
    firstName: 'Demo',
    lastName: 'User',
    username: 'demo_user',
    hashedPassword: bcrypt.hashSync('demoPassword'),
    email: 'demo@email.com',
  },
  // Module Leads
  {
    id: 2,
    firstName: 'Bill',
    lastName: 'Adams',
    username: 'wadams',
    hashedPassword: bcrypt.hashSync('wadams'),
    email: 'wadams@appacademy.io',
  },
  {
    id: 3,
    firstName: 'Shane',
    lastName: 'Wilkey',
    username: 'swilkey',
    hashedPassword: bcrypt.hashSync('swilkey'),
    email: 'swilkey@appacademy.io',
  },
  {
    id: 4,
    firstName: 'Geoffrey',
    lastName: 'Otieno',
    username: 'gotieno',
    hashedPassword: bcrypt.hashSync('gotieno'),
    email: 'gotieno@appacademy.io',
  },
  {
    id: 5,
    firstName: 'Dan',
    lastName: 'Purcell',
    username: 'dpurcell',
    hashedPassword: bcrypt.hashSync('dpurcell'),
    email: 'dpurcell@appacademy.io',
  },
  {
    id: 6,
    firstName: 'Brad',
    lastName: 'Simpson',
    username: 'bsimpson',
    hashedPassword: bcrypt.hashSync('bsimpson'),
    email: 'bsimpson@appacademy.io',
  },
  {
    id: 7,
    firstName: 'Hector',
    lastName: 'Crespo',
    username: 'hcrespo',
    hashedPassword: bcrypt.hashSync('hcrespo'),
    email: 'hcrespo@appacademy.io',
  },
  // TA's
  {
    id: 8,
    firstName: 'Cody',
    lastName: 'Lavene',
    username: 'clavene',
    hashedPassword: bcrypt.hashSync('clavene'),
    email: 'clavene@appacademy.io',
  },
  {
    id: 9,
    firstName: 'Cameron',
    lastName: 'Whiteside',
    username: 'cwhiteside',
    hashedPassword: bcrypt.hashSync('cwhiteside'),
    email: 'cwhiteside@appacademy.io',
  },
  {
    id: 10,
    firstName: 'Peter',
    lastName: 'Shin',
    username: 'pshin',
    hashedPassword: bcrypt.hashSync('pshin'),
    email: 'pshin@appacademy.io',
  },
  {
    id: 11,
    firstName: 'Braxton',
    lastName: 'Kappes',
    username: 'bkappes',
    hashedPassword: bcrypt.hashSync('bkappes'),
    email: 'bkappes@appacademy.io',
  },
  {
    id: 12,
    firstName: 'Jesse',
    lastName: 'Christensen',
    username: 'jchristensen',
    hashedPassword: bcrypt.hashSync('jchristensen'),
    email: 'jchristensen@appacademy.io',
  },
  {
    id: 13,
    firstName: 'Jojo',
    lastName: 'Yih',
    username: 'jyih',
    hashedPassword: bcrypt.hashSync('jyih'),
    email: 'jyih@appacademy.io',
  },
  {
    id: 14,
    firstName: 'Nick',
    lastName: 'Esqueda',
    username: 'nesqueda',
    hashedPassword: bcrypt.hashSync('nesqueda'),
    email: 'nesqueda@appacademy.io',
  },
  {
    id: 15,
    firstName: 'Andrew',
    lastName: 'Fava',
    username: 'afava',
    hashedPassword: bcrypt.hashSync('afava'),
    email: 'afava@appacademy.io',
  },
  {
    id: 16,
    firstName: 'Ari',
    lastName: 'Robinson',
    username: 'arobinson',
    hashedPassword: bcrypt.hashSync('arobinson'),
    email: 'arobinson@appacademy.io',
  },
  {
    id: 17,
    firstName: 'Sam',
    lastName: 'Song',
    username: 'ssong',
    hashedPassword: bcrypt.hashSync('ssong'),
    email: 'ssong@appacademy.io',
  },
  {
    id: 18,
    firstName: 'Tanner',
    lastName: 'Shaw',
    username: 'tshaw',
    hashedPassword: bcrypt.hashSync('tshaw'),
    email: 'tshaw@appacademy.io',
  },
  {
    id: 19,
    firstName: 'Olivia',
    lastName: 'Bir',
    username: 'obir',
    hashedPassword: bcrypt.hashSync('obir'),
    email: 'obir@appacademy.io',
  },
  {
    id: 20,
    firstName: 'Nate',
    lastName: 'Treadaway',
    username: 'ntreadway',
    hashedPassword: bcrypt.hashSync('ntreadway'),
    email: 'ntreadway@appacademy.io',
  },
  {
    id: 21,
    firstName: 'Daniel',
    lastName: 'Chin',
    username: 'dchin',
    hashedPassword: bcrypt.hashSync('dchin'),
    email: 'dchin@appacademy.io',
  },
  {
    id: 22,
    firstName: 'Alex',
    lastName: 'Pezzati',
    username: 'apezzati',
    hashedPassword: bcrypt.hashSync('apezzati'),
    email: 'apezzati@appacademy.io',
  },
  {
    id: 23,
    firstName: 'Sherry',
    lastName: 'Yu',
    username: 'syu',
    hashedPassword: bcrypt.hashSync('syu'),
    email: 'syu@appacademy.io',
  },
  {
    id: 24,
    firstName: 'Rawaha',
    lastName: 'Memon',
    username: 'rmemon',
    hashedPassword: bcrypt.hashSync('rmemon'),
    email: 'rmemon@appacademy.io',
  },
  {
    id: 25,
    firstName: 'Whit',
    lastName: 'Minson',
    username: 'wminson',
    hashedPassword: bcrypt.hashSync('wminson'),
    email: 'wminson@appacademy.io',
  },
  {
    id: 26,
    firstName: 'Daniel',
    lastName: 'Flores',
    username: 'dflores',
    hashedPassword: bcrypt.hashSync('dflores'),
    email: 'dflores@appacademy.io',
  },
  {
    id: 27,
    firstName: 'David',
    lastName: 'Nash',
    username: 'dnash',
    hashedPassword: bcrypt.hashSync('dnash'),
    email: 'dnash@appacademy.io',
  },
  {
    id: 28,
    firstName: 'John',
    lastName: 'Lee',
    username: 'jlee',
    hashedPassword: bcrypt.hashSync('jlee'),
    email: 'jlee@appacademy.io',
  },
  {
    id: 29,
    firstName: 'Andrew',
    lastName: 'Tran',
    username: 'atran',
    hashedPassword: bcrypt.hashSync('atran'),
    email: 'atran@appacademy.io',
  },
  {
    id: 30,
    firstName: 'Cesar',
    lastName: 'Solano',
    username: 'csolano',
    hashedPassword: bcrypt.hashSync('csolano'),
    email: 'csolano@appacademy.io',
  },
  {
    id: 31,
    firstName: 'Ryan',
    lastName: 'Schneider',
    username: 'rschneider',
    hashedPassword: bcrypt.hashSync('rschneider'),
    email: 'rschneider@appacademy.io',
  },
  {
    id: 32,
    firstName: 'Anthony',
    lastName: 'Lovern',
    username: 'alovern',
    hashedPassword: bcrypt.hashSync('alovern'),
    email: 'alovern@appacademy.io',
  },
  {
    id: 33,
    firstName: 'Franco',
    lastName: 'Portin',
    username: 'fportin',
    hashedPassword: bcrypt.hashSync('fportin'),
    email: 'fportin@appacademy.io',
  },
  {
    id: 34,
    firstName: 'Kevin',
    lastName: 'Bartolome',
    username: 'kbartolome',
    hashedPassword: bcrypt.hashSync('kbartolome'),
    email: 'kbartolome@appacademy.io',
  },

  // Cohort Leads
  {
    id: 35,
    firstName: 'David',
    lastName: 'DeHerrera',
    username: 'ddeherrera',
    hashedPassword: bcrypt.hashSync('ddeherrera'),
    email: 'ddeherrera@appacademy.io',
  },
  {
    id: 36,
    firstName: 'Drew',
    lastName: 'Thurman',
    username: 'athruman',
    hashedPassword: bcrypt.hashSync('athruman'),
    email: 'athruman@appacademy.io',
  },
  {
    id: 37,
    firstName: 'David',
    lastName: 'Rogers',
    username: 'drogers',
    hashedPassword: bcrypt.hashSync('drogers'),
    email: 'drogers@appacademy.io',
  },

  // Students
  {
    id: 38,
    firstName: 'Jair',
    lastName: 'Carbajal',
    username: 'jcarbajal',
    hashedPassword: bcrypt.hashSync('jcarbajal'),
    email: 'jcarbajal@appacademy.io',
  },
  {
    id: 39,
    firstName: 'Tiffany',
    lastName: 'Yang',
    username: 'tyang',
    hashedPassword: bcrypt.hashSync('tyang'),
    email: 'tyang@appacademy.io',
  },
  {
    id: 40,
    firstName: 'Daniel',
    lastName: 'Lam',
    username: 'lain',
    hashedPassword: bcrypt.hashSync('lain'),
    email: 'lain@appacademy.io',
  },
  {
    id: 41,
    firstName: 'Gary',
    lastName: 'Song',
    username: 'hustling',
    hashedPassword: bcrypt.hashSync('hustling'),
    email: 'hustling@appacademy.io',
  },
  {
    id: 42,
    firstName: 'Jake',
    lastName: 'Matillano',
    username: 'doofey',
    hashedPassword: bcrypt.hashSync('doofey'),
    email: 'doofey@appacademy.io',
  },
  {
    id: 43,
    firstName: 'John',
    lastName: 'Carrera',
    username: 'badreg',
    hashedPassword: bcrypt.hashSync('badreg'),
    email: 'badreg@appacademy.io',
  },
  {
    id: 44,
    firstName: 'Maliha',
    lastName: 'Omair',
    username: 'maliha',
    hashedPassword: bcrypt.hashSync('maliha'),
    email: 'maliha@appacademy.io',
  },
  {
    id: 45,
    firstName: 'Thenu',
    lastName: 'Nachiyappan',
    username: 'thenu',
    hashedPassword: bcrypt.hashSync('thenu'),
    email: 'thenu@appacademy.io',
  },
  {
    id: 46,
    firstName: 'Brennon',
    lastName: 'Morris',
    username: 'BrennonMorris',
    hashedPassword: bcrypt.hashSync('BrennonMorris'),
    email: 'BrennonMorris@appacademy.io',
  },
  {
    id: 47,
    firstName: 'Andrew',
    lastName: 'Kay',
    username: 'rewd',
    hashedPassword: bcrypt.hashSync('rewd'),
    email: 'rewd@appacademy.io',
  },
  {
    id: 48,
    firstName: 'Adam',
    lastName: 'Selki',
    username: 'Damzzz123',
    hashedPassword: bcrypt.hashSync('Damzzz123'),
    email: 'Damzzz123@appacademy.io',
  },
  {
    id: 49,
    firstName: 'Christopher',
    lastName: 'Pannella',
    username: 'goatedIndeed',
    hashedPassword: bcrypt.hashSync('goatedIndeed'),
    email: 'goatedIndeed@appacademy.io',
  },
  {
    id: 50,
    firstName: 'Christo',
    lastName: 'Grabowski',
    username: 'ChristoGrabowski',
    hashedPassword: bcrypt.hashSync('ChristoGrabowski'),
    email: 'ChristoGrabowski@appacademy.io',
  },
  {
    id: 51,
    firstName: 'Cindy',
    lastName: 'Guzman',
    username: 'Cece',
    hashedPassword: bcrypt.hashSync('CeceRose'),
    email: 'CeceRose@appacademy.io',
  },
  {
    id: 52,
    firstName: 'David',
    lastName: 'Burch',
    username: 'DavidDanielBurch',
    hashedPassword: bcrypt.hashSync('DavidDanielBurch'),
    email: 'DavidDanielBurch@appacademy.io',
  },
  {
    id: 53,
    firstName: 'Eliza',
    lastName: 'Wimberly',
    username: 'ElizaW',
    hashedPassword: bcrypt.hashSync('ElizaW'),
    email: 'ElizaW@appacademy.io',
  },
  {
    id: 54,
    firstName: 'James',
    lastName: 'Lee',
    username: 'JamesLee',
    hashedPassword: bcrypt.hashSync('JamesLee'),
    email: 'JamesLee@appacademy.io',
  },
  {
    id: 55,
    firstName: 'Jason',
    lastName: 'Kong',
    username: 'JasonKong',
    hashedPassword: bcrypt.hashSync('JasonKong'),
    email: 'JasonKong@appacademy.io',
  },
  {
    id: 56,
    firstName: 'Joanna',
    lastName: 'Gilbert',
    username: 'joanna',
    hashedPassword: bcrypt.hashSync('joanna'),
    email: 'joanna@appacademy.io',
  },
  {
    id: 57,
    firstName: 'Max',
    lastName: 'Yaswen',
    username: 'MaxYaswen',
    hashedPassword: bcrypt.hashSync('MaxYaswen'),
    email: 'MaxYaswen@appacademy.io',
  },
  {
    id: 58,
    firstName: 'Moran',
    lastName: 'Even',
    username: 'MoranEven',
    hashedPassword: bcrypt.hashSync('MoranEven'),
    email: 'MoranEven@appacademy.io',
  },
  {
    id: 59,
    firstName: 'Yasha',
    lastName: 'Yang',
    username: 'yashaY',
    hashedPassword: bcrypt.hashSync('yashaY'),
    email: 'yashaY@appacademy.io',
  },
  {
    id: 60,
    firstName: 'Yibo',
    lastName: 'Guo',
    username: 'YiboGuo',
    hashedPassword: bcrypt.hashSync('YiboGuo'),
    email: 'YiboGuo@appacademy.io',
  },
  {
    id: 61,
    firstName: 'Alex',
    lastName: 'Auch',
    username: 'Auchie',
    hashedPassword: bcrypt.hashSync('Auchie'),
    email: 'Auchie@appacademy.io',
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
