const copyrightyear = document.querySelector("#copyrightyear");
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const currentDate = new Date();

document.querySelector("#datetime").textContent = currentDate.toLocaleString(
  "en-US",
  options
);

copyrightyear.textContent = `${new Date().getFullYear()}`;
document.getElementById("lastmod").textContent = document.lastModified;

function toggleMenu() {
  document.getElementById("main-nav").classList.toggle("open");
  document.getElementById("menu-button").classList.toggle("open");
}

const x = document.getElementById("menu-button");

x.onclick = toggleMenu;
