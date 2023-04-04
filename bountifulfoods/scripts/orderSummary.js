//console.table(localStorage);

// Get container element
const container = document.querySelector("#output-container");

// Loop through localStorage
for (let i = 0; i < localStorage.length; i++) {
  const storageKey = localStorage.key(i);

  if (!storageKey.startsWith("bountifulfoods-")) {
    continue; // skip if it doesn't start with "bountifulfoods-"
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  if (!dateRegex.test(storageKey.slice(17))) {
    continue; // skip if it doesn't end with a valid date and time
  }

  const orderSummary = JSON.parse(localStorage.getItem(storageKey));
  console.table(orderSummary);

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const output = document.createElement("div");
  output.innerHTML = orderSummary.outputText;

  const userAgent = document.createElement("p");
  userAgent.textContent = `User Agent: ${orderSummary.userAgent}`;

  cardBody.appendChild(output);
  cardBody.appendChild(userAgent);
  card.appendChild(cardBody);

  // Add card to container
  container.appendChild(card);
}
