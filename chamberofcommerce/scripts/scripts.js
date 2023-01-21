const copyrightyear = document.querySelector("#copyrightyear");
const firstname = "Ross";
const lastname = "Humpherys";
const course = "WDD 230";

copyrightyear.textContent = `© ${new Date().getFullYear()} / ${firstname} ${lastname} / ${course}`;
document.getElementById("lastmod").textContent = document.lastModified;

// Data objects
const data1 = [
  { Persona: "Small Business Owner" },
  { Photo: "/images/businessman.jpg" },
  { "Fictional Name": "John Brown" },
  { "Job Title": "Prospective Bakery Owner" },
  { "Business Name": "Brown's Bakery" },
  { "Goals for Business": "To open a bakery in the downtown area" },
  {
    Environment:
      "Works hard and puts a lot of attention to detail for his baked goods.",
  },
];
const data2 = [
  { Persona: "Family of three" },
  { Photo: "/imageS/family.jpg" },
  { "Fictional Name": "The Robertsons" },
  { "Reasons for moving": "To find a good neighborhood to raise their child" },
  { "Goals for the new home": "To find a home with a good school district" },
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
      if (
        key === "Photo" &&
        (data[i][key].startsWith("/") || data[i][key].startsWith("https"))
      ) {
        cell2.innerHTML = `<img src="${data[i][key]}" alt="${key}">`;
      } else {
        cell2.innerHTML = data[i][key];
      }
    }
  }
  // Append table to page
  const container = document.getElementById(containerId);
  container.appendChild(table);
}

// Create tables
createTable(data1, "table-container-1");
createTable(data2, "table-container-2");
