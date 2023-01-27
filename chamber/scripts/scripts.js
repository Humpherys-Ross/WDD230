const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

const copyrightyear = document.querySelector("#copyrightyear");
const firstname = "Ross";
const lastname = "Humpherys";
const course = "WDD 230";

copyrightyear.textContent = `© ${new Date().getFullYear()} / ${firstname} ${lastname} / ${course}`;
document.getElementById("lastmod").textContent = document.lastModified;
