//Set this when DOM is loaded
document.addEventListener('DOMContentLoaded',() => {
  const setStartDate = moment(new Date()).format("D-MMM-YY");
  const setEndDate = moment(new Date()).add(1,'days').format("D-MMM-YY");
  const spans_check_in_tab1 = document.getElementById('check-in-date-tab1');
  const spans_check_out_tab1 = document.getElementById('check-out-date-tab1');
  const spans_check_in_tab2 = document.getElementById('check-in-date-tab2');
  const spans_check_out_tab2 = document.getElementById('check-out-date-tab2');
  //setting up dates to both tabs
  spans_check_in_tab1.innerHTML = setStartDate;
  spans_check_out_tab1.innerHTML = setEndDate;
  spans_check_in_tab2.innerHTML = setStartDate;
  spans_check_out_tab2.innerHTML = setEndDate;
})


// Setting Active Tabs
let tabs = document.querySelectorAll(".tabs li a");
tabs.forEach((elem,idx) => {
  elem.addEventListener('click',() => {
    if(elem.classList.contains('active')) return false;
    elem.className += ' active';
    if(elem.classList.contains('tab1')){
      document.getElementsByClassName('body-tab1')[0].className += ' show-active-tab';
      document.getElementsByClassName('body-tab2')[0].classList.remove('show-active-tab');
    }else if(elem.classList.contains('tab2')){
      document.getElementsByClassName('body-tab2')[0].className += ' show-active-tab';
      document.getElementsByClassName('body-tab1')[0].classList.remove('show-active-tab');
      
    }
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
      document.getElementById('check-in-date-tab1').innerHTML = setStartDate;
      document.getElementById('check-out-date-tab1').innerHTML = setEndDate;
    });
  },
});

// picker.DateTime();

btncheckinout.addEventListener('click',()=>{
  popup.style.display = "block";
  picker.show();
});

window.addEventListener('click',(e)=>{
  if (e.target == popup) {
    popup.style.display = "none";
  }
})