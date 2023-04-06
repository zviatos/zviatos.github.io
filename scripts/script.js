document.getElementById("hamburger").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu() {
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.right = "-60vw";
  background_menu.style.display = "none";
}

function switchMode() {
  const body = document.querySelector("body");
  const header1 = document.querySelector("h1");
  const header2 = document.querySelector("h2");
  const footer = document.querySelector(".page-footer");
  const pageHeader = document.querySelector(".page-header");
  const hobbies = document.querySelector(".hobbies");
  const cardcontent = document.querySelector(".card-cont");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.style.backgroundColor = "var(--gray)";
    body.style.color = "white";
    header1.style.color = "white";
    header2.style.color = "white";
    hobbies.style.color = "var(--slate)";
    footer.style.backgroundColor = "var(--black)";
    cardcontent.style.backgroundColor = "var(--black)";
    pageHeader.style.backgroundColor = "var(--black)";
  } else {
    body.classList.add("light-mode");
    body.style.backgroundColor = "white";
    body.style.color = "var(--slate)";
    header1.style.color = "var(--slate)";
    header2.style.color = "var(--slate)";
    hobbies.style.color = "white";
    footer.style.backgroundColor = "var(--slate)";
    cardcontent.style.backgroundColor = "var(--slate)";
    pageHeader.style.backgroundColor = "var(--slate)";
  }
}
