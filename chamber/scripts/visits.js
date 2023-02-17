// Script for Number of Visits
let numVisits = document.querySelector(".daysOfVisit");

// Script for displaying the number of days since the last visit
let numOfVisits = window.localStorage.getItem("visits");
let lastVisit = Number(window.localStorage.getItem("lastVisit"));

const FACTOR = 1000 * 60 * 60 * 24;

let numOfDays = Math.ceil((Date.now() - lastVisit) / FACTOR);

localStorage.setItem("lastVisit", Date.now());

if (numOfVisits != 0) {
  numVisits.textContent =
    "It's been " + numOfDays + " day(s) since your last visit.";
} else {
  numVisits.textContent = "This is your first page visit.";
}

numOfVisits = parseInt(numOfVisits) + 1;
// store the new number of visits value
localStorage.setItem("visits", numOfVisits);
