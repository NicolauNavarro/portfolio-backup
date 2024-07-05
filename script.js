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
}
function lightMode() {
  darkModeState = false;
  modeSwicht.classList.add("off-switch");
  root.setProperty("--low-dark", "#ffffff90");
  root.setProperty("--background", "#ffffff");
  root.setProperty("--white", "#121217");
  root.setProperty("--broken-white", "#00000090");
  root.setProperty("--active-white", "#00000025");
}
