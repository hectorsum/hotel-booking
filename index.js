

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