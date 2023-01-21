const copyrightyear = document.querySelector("#copyrightyear");
const firstname = "Ross";
const lastname = "Humpherys";
const course = "WDD 230";

copyrightyear.textContent = `© ${new Date().getFullYear()} / ${firstname} ${lastname} / ${course}`;
document.getElementById("lastmod").textContent = document.lastModified;

// Data objects
const data1 = [
  { Persona: "Persona1" },
  { Photo: "Image1" },
  { Detail1: "information3" },
];
const data2 = [
  { Persona: "Persona2" },
  { Photo: "Image2" },
  { Detail1: "information7" },
];

// Function to create table
function createTable(data, containerId) {
  const table = document.createElement("table");
  // Loop through data and create table rows and cells
  for (let i = 0; i < data.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < Object.keys(data[i]).length; j++) {
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      const key = Object.keys(data[i])[j];
      cell1.innerHTML = key;
      cell2.innerHTML = data[i][key];
    }
  }
  // Append table to page
  const container = document.getElementById(containerId);
  container.appendChild(table);
}

// Create tables
createTable(data1, "table-container-1");
createTable(data2, "table-container-2");
