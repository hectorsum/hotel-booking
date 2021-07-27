import Horizontal_BookingRH from './index.js';
new Horizontal_BookingRH({
  tabs: {
    HA: { //Hotel + Airport
      aiport: true,
      checkinout: true,
      children: true,
      adults: true,
      promocode: true,
      agencygroup: true,
      button: true,
      hotels:{
        '555':'Hotel 01',
        '5d5':'Hotel 02',
        '5f5':'Hotel 03',
      }
    },
    HO: { //Hotel Only
      aiport: false,
      checkinout: true,
      children: true,
      adults: true,
      promocode: true,
      agencygroup: true,
      button: true,
      hotels:{
        '555':'Hotel 01',
        'ABC':'Hotel 02',
        'DSG':'Hotel 03',
      }
    },
  }
});