// //console.table(localStorage);

// // Get container element
// const container = document.querySelector("#output-container");

// // Loop through localStorage
// for (let i = 0; i < localStorage.length; i++) {
//   const storageKey = localStorage.key(i);

//   if (!storageKey.startsWith("bountifulfoods-")) {
//     continue; // skip if it doesn't start with "bountifulfoods-"
//   }

//   var tag = document.createElement("div");
//   var text = document.createTextNode(storageKey);
//   tag.appendChild(text);
//   container.appendChild(tag);

//   const orderSummary = JSON.parse(localStorage.getItem(storageKey));
//   console.log(orderSummary);

//   // Create card
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   const name = document.createElement("p");
//   name.textContent = `Name: ${orderSummary.name}`;

//   // cardBody.appendChild(output);
//   cardBody.appendChild(name);
//   card.appendChild(cardBody);

//   // Add card to container
//   container.appendChild(card);
// }

// Get container element
const container = document.querySelector("#output-container");

let orderCounter = 1;

// Loop through localStorage
for (let i = 0; i < localStorage.length; i++) {
  const storageKey = localStorage.key(i);

  if (!storageKey.startsWith("bountifulfoods-")) {
    continue; // skip if it doesn't start with "bountifulfoods-"
  }

  const tag = document.createElement("h3");
  const text = document.createTextNode(`Order ${orderCounter}`);
  tag.appendChild(text);
  container.appendChild(tag);

  const orderSummary = JSON.parse(localStorage.getItem(storageKey));
  console.log(orderSummary);

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const name = document.createElement("p");
  name.textContent = `Name: ${orderSummary.name}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${orderSummary.email}`;

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${orderSummary.phone}`;

  const fruitsSelected = document.createElement("p");
  let fruitsString = "Fruits Selected: ";
  for (let fruit of orderSummary.fruitsSelected) {
    fruitsString += `${fruit.name}, `;
  }
  fruitsString = fruitsString.slice(0, -2); // remove the last comma
  fruitsSelected.textContent = fruitsString;

  const specialInstructions = document.createElement("p");
  specialInstructions.textContent = `Special Instructions: ${orderSummary.specialInstructions}`;

  const totals = document.createElement("p");
  const totalsObj = orderSummary.totals;
  let totalsString = "Totals: ";
  totalsString += `Carbs: ${totalsObj.carbs}, `;
  totalsString += `Protein: ${totalsObj.protein}, `;
  totalsString += `Fat: ${totalsObj.fat}, `;
  totalsString += `Sugar: ${totalsObj.sugar}, `;
  totalsString += `Calories: ${totalsObj.calories}`;
  totals.textContent = totalsString;

  cardBody.appendChild(name);
  cardBody.appendChild(email);
  cardBody.appendChild(phone);
  cardBody.appendChild(fruitsSelected);
  cardBody.appendChild(specialInstructions);
  cardBody.appendChild(totals);
  card.appendChild(cardBody);

  // Add card to container
  container.appendChild(card);

  orderCounter++;
}
