const dataURL =
  "https://raw.githubusercontent.com/Humpherys-Ross/wdd230/main/bountifulfoods/scripts/data.json";

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);
    const fruits = jsonObject["fruits"];
    const form = document.querySelector("#fruit-form");
    const output = document.querySelector("#output");

    // Populate fruits dropdowns
    const fruitSelects = document.querySelectorAll(".fruit-select");
    for (let i = 0; i < fruitSelects.length; i++) {
      const fruitOptions = fruits.map((fruit) => {
        return `<option value="${fruit.name}" data-carbs="${fruit.carbs}" data-protein="${fruit.protein}" data-fat="${fruit.fat}" data-sugar="${fruit.sugar}" data-calories="${fruit.calories}">${fruit.name}</option>`;
      });
      fruitSelects[i].innerHTML += fruitOptions.join("");
    }

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const phone = form.elements["phone"].value;
      const fruitsSelected = [];
      const specialInstructions = form.elements["instructions"].value;

      fruitSelects.forEach((select) => {
        fruitsSelected.push({
          name: select.value,
          carbs: parseInt(
            select.options[select.selectedIndex].getAttribute("data-carbs")
          ),
          protein: parseInt(
            select.options[select.selectedIndex].getAttribute("data-protein")
          ),
          fat: parseInt(
            select.options[select.selectedIndex].getAttribute("data-fat")
          ),
          sugar: parseInt(
            select.options[select.selectedIndex].getAttribute("data-sugar")
          ),
          calories: parseInt(
            select.options[select.selectedIndex].getAttribute("data-calories")
          ),
        });
      });

      // Calculate totals
      const totals = fruitsSelected.reduce(
        (acc, fruit) => {
          acc.carbs += fruit.carbs;
          acc.protein += fruit.protein;
          acc.fat += fruit.fat;
          acc.sugar += fruit.sugar;
          acc.calories += fruit.calories;
          return acc;
        },
        { carbs: 0, protein: 0, fat: 0, sugar: 0, calories: 0 }
      );

      // Format output
      const outputText = `
        <h2>Order Summary</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Fruits:</p>
        <ul>
          ${fruitsSelected.map((fruit) => `<li>${fruit.name}</li>`).join("")}
        </ul>
        <p>Special Instructions: ${specialInstructions}</p>
        <p>Totals:</p>
        <ul>
          <li>Carbohydrates: ${totals.carbs}g</li>
          <li>Protein: ${totals.protein}g</li>
          <li>Fat: ${totals.fat}g</li>
          <li>Sugar: ${totals.sugar}g</li>
          <li>Calories: ${totals.calories}kcal</li>
        </ul>
      `;

      // Display output
      output.innerHTML = outputText;
    });
  });
