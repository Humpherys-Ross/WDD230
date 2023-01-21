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
    title: "Lesson 01",
    link: "https://codepen.io/Humpherys-Ross/pen/LYBRMbz",
  },
  {
    week: "Week 02",
    title: "Lesson 02",
    link: "lesson2/design-principles.html",
  },
  {
    week: "Week 03",
    title: "Chamber of Commerce",
    link: "/chamberofcommerce/index.html",
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
