const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const filterButton = document.querySelector("#filter-button");

filterButton.addEventListener("click", () => {
  const prophets = document.querySelectorAll("section");

  prophets.forEach((cards) => {
    const length = cards.querySelector("p:nth-child(5)").textContent;
    if (length.includes("More that 10")) {
      cards.style.display = "none";
    } else {
      cards.style.display = "block";
    }
  });
});

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
    let order = document.createElement("p");
    let age = document.createElement("p");
    let length = document.createElement("p");
    // let caption = document.createElement("caption");

    if (prophet.order == 1) {
      order.textContent = `${prophet.order}st`;
    } else if (prophet.order == 2) {
      order.textContent = `${prophet.order}nd`;
    } else if (prophet.order == 3) {
      order.textContent = `${prophet.order}rd`;
    } else {
      order.textContent = `${prophet.order}th`;
    }

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    deathdate.textContent = `Date of Death: ${prophet.death}`;
    length.textContent = `Length of Service: ${prophet.length}`;

    const birthYear = new Date(prophet.birthdate).getFullYear();
    const deathYear = new Date(prophet.death).getFullYear();
    const currentYear = new Date().getFullYear();
    const ageValue = deathYear
      ? deathYear - birthYear
      : currentYear - birthYear;
    if (prophet.death) {
      age.textContent = `Age at Death: ${ageValue}`;
    } else {
      age.textContent = `Current Age: ${ageValue}`;
    }

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${order.textContent} President of the Church of Jesus Christ of Latter-day Saints`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(deathdate);
    card.appendChild(age);
    card.appendChild(length);
    card.appendChild(hrline);
    card.appendChild(portrait);

    // caption.appendChild(age);
    // card.appendChild(caption);

    cards.appendChild(card);
  });
};
