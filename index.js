//Set this when DOM is loaded
document.addEventListener('DOMContentLoaded',() => {
  const setStartDate = moment(new Date()).format("D-MMM-YY");
  const setEndDate = moment(new Date()).add('days',1).format("D-MMM-YY");
  document.getElementById('check-in-date').innerHTML = setStartDate;
  document.getElementById('check-out-date').innerHTML = setEndDate;
})


// Setting Active Tabs
let tabs = document.querySelectorAll(".tabs li a");
tabs.forEach((elem,idx) => {
  elem.addEventListener('click',() => {
    if(elem.classList.contains('active')) return false;
    elem.className += ' active';
    tabs.forEach((ell,idy)=>{
      if(idx !== idy) {
        ell.classList.remove('active');
      }
    })
  })
})

// Popup
const popup = document.getElementById('myModal');
const btncheckinout = document.getElementById('check-in-out');
const close = document.getElementsByClassName("close")[0];



// DatePicker
const picker = new Litepicker({ 
  element: document.getElementById('modal-content'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  numberOfColumns:2,
  numberOfMonths:2,
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  },
  setup: (picker) => {
    picker.on('selected', () => {
      const {dateInstance:datestart} = picker.getStartDate()
      const {dateInstance:dateend} = picker.getEndDate()
      popup.style.display = "none"; //closing popup
      const setStartDate = moment(datestart).format("D-MMM-YY");
      const setEndDate = moment(dateend).format("D-MMM-YY");
      document.getElementById('check-in-date').innerHTML = setStartDate;
      document.getElementById('check-out-date').innerHTML = setEndDate;
    });
  },
});

picker.DateTime();

// return DateTime object
// const datepicker = document.createElement(picker.DateTime());
// document.body.insertBefore(datepicker,popup);

btncheckinout.addEventListener('click',()=>{
  popup.style.display = "block";
  picker.show();
});
// document.getElementById('get-date').addEventListener('click', ()=>{
  // const {dateInstance:start} = picker.getStartDate()
  // const {dateInstance:end} = picker.getEndDate()
  // console.log({start,end})
// })
// close.addEventListener('click',()=>{
//   popup.style.display = "none";
// });
window.addEventListener('click',(e)=>{
  if (e.target == popup) {
    popup.style.display = "none";
  }
})