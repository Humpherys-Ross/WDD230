const copyrightyear = document.querySelector("#copyrightyear");
const firstname = "Ross";
const lastname = "Humpherys";
const course = "WDD 230";

copyrightyear.textContent = `© ${new Date().getFullYear()} / ${firstname} ${lastname} / ${course}`;
document.getElementById("lastmod").textContent = document.lastModified;

// Select the unordered list element
const list = document.querySelector("ul");

// Create an array of objects representing the assignments
const assignments = [
  {
    week: "Week 01",
    title: "Lesson 1: Introduction to Web Development",
    link: "https://codepen.io/Humpherys-Ross/pen/LYBRMbz",
  },
  {
    week: "Week 02",
    title: "Design Principles",
    link: "lesson2/design-principles.html",
  },
  {
    week: "Week 03",
    title: "Chamber of Commerce Site Plan",
    link: "chamberofcommerce/index.html",
  },
  {
    week: "Week 04",
    title: "Chamber of Commerce Site",
    link: "chamber/index.html",
  },
  {
    week: "Week 05",
    title: "DOM Manipulation",
    link: "lesson5/index.html",
  },
  {
    week: "Week 05",
    title: "Chamber of Commerce Site (Continued)",
    link: "chamber/index.html",
  },
  {
    week: "Week 06",
    title: "Responsive Design and Windchill Calculator",
    link: "chamber/index.html",
  },
  {
    week: "Week 07",
    title: "CSS Property: Transform",
    link: "week7presentation/index.html",
  },
  {
    week: "Week 07",
    title: "Lazy Loading Images",
    link: "lesson7/index.html",
  },
  {
    week: "Week 07",
    title: "Chamber of Commerce Discover Page",
    link: "chamber/discover.html",
  },
  {
    week: "Week 08",
    title: "Week 8 Table Build",
    link: "lesson8/tablebuild.html",
  },
  {
    week: "Week 08",
    title: "Chamber of Commerce Join Page",
    link: "chamber/join.html",
  },
  {
    week: "Week 09",
    title: "Prophets JSON and FetchAPI",
    link: "lesson9/prophets.html",
  },
  {
    week: "Week 09",
    title: "Chamber of Commerce Directory Page",
    link: "chamber/directory.html",
  },
  {
    week: "Week 10",
    title: "Weater API",
    link: "lesson10/weather-api.html",
  },
  // Add more objects for additional assignments
];

// Iterate over the array of assignments
for (const assignment of assignments) {
  // Create a list item element
  const listItem = document.createElement("li");

  // Create an anchor element
  const link = document.createElement("a");
  link.textContent = assignment.title; // Set the anchor element's text
  link.href = assignment.link; // Set the anchor element's href attribute

  // Append the anchor element to the list item element
  listItem.appendChild(link);

  // Create a text node for the week property
  const weekText = document.createTextNode(`${assignment.week}: `);

  // Append the text node to the list item element
  listItem.insertBefore(weekText, link);

  // Append the list item element to the unordered list element
  list.appendChild(listItem);
}
