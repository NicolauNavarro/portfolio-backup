const lenis = new Lenis()



lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)






const content = document.querySelector(".content");
const loadPage = document.querySelector(".load-page");
window.addEventListener("load", () => {
  setTimeout(() => {
    content.style.display = "flex";
    loadPage.style.opacity = "0";
    loadPage.addEventListener("transitionend", () => {
      loadPage.style.display = "none";
    });
  }, 2400);
});

let darkModeState = true;

const modeSwicht = document.querySelector("#mode");
modeSwicht.addEventListener("click", () => {
  if (darkModeState == true) {
    lightMode();
  } else {
    darkMode();
  }
});

const root = document.documentElement.style;
function darkMode() {
  darkModeState = true;
  modeSwicht.classList.remove("off-switch");
  root.setProperty("--low-dark", "#00000999");
  root.setProperty("--background", "#1a1a1a");
  root.setProperty("--white", "#ffffff");
  root.setProperty("--broken-white", "#ffffff90");
  root.setProperty("--active-white", "#ffffff30");
  root.setProperty("--dark", "#121217");
}
function lightMode() {
  darkModeState = false;
  modeSwicht.classList.add("off-switch");
  root.setProperty("--low-dark", "#ffffff90");
  root.setProperty("--background", "#ffffff");
  root.setProperty("--white", "#121217");
  root.setProperty("--broken-white", "#00000090");
  root.setProperty("--active-white", "#00000025");
  root.setProperty("--dark", "#eeede9");
}



const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.addEventListener('click', () => {
    closeMenu()
  })
});

window.addEventListener('scroll', () =>{
  closeMenu()
})


let menuOpened = false

const menu = document.querySelector('#menu');
const island = document.querySelector('.island');
menu.addEventListener('click', () => {
  if(menuOpened == false){
    openMenu()
  }else{
    closeMenu()
  }
})

function openMenu(){
  menu.classList.add('opened')
  island.classList.remove('closed')
  menuOpened = true
}
function closeMenu(){
  menu.classList.remove('opened')
  island.classList.add('closed')
  menuOpened = false
}






