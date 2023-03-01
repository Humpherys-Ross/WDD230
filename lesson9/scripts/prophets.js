const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
}

getProphetData();
const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");
    let deathdate = document.createElement("p");
    let hrline = document.createElement("hr");
    let portrait = document.createElement("img");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    deathdate.textContent = `Date of Death: ${prophet.death}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(deathdate);
    card.appendChild(hrline);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
