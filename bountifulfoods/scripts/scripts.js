function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}

let x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#currentDateandTime").innerHTML = document.lastModified;
