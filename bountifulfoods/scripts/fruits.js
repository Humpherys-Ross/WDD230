const dataURL =
  "https://raw.githubusercontent.com/Humpherys-Ross/wdd230/main/bountifulfoods/scripts/data.json";

const currentDate = new Date();
const dataString = `${
  currentDate.getMonth() + 1
}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
const timeString = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
const storageKey = `bountifulfoods-${dataString}-${timeString}`;

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    //console.table(jsonObject);
    const fruits = jsonObject;
    //console.table(fruits);
    const form = document.querySelector("#fruit-form");
    const output = document.querySelector("#output");

    // Populate fruits dropdowns
    const fruitSelects = document.querySelectorAll(".fruit-select");
    //console.log(fruitSelects);
    for (let i = 0; i < fruitSelects.length; i++) {
      for (let j = 0; j < fruits.length; j++) {
        const fruitOption = document.createElement("option");
        fruitOption.value = fruits[j].name;
        fruitOption.setAttribute(
          "nutritions-carbohydrates",
          fruits[j].nutritions.carbohydrates
        );
        fruitOption.setAttribute(
          "nutritions-protein",
          fruits[j].nutritions.protein
        );
        fruitOption.setAttribute("nutritions-fat", fruits[j].nutritions.fat);
        fruitOption.setAttribute(
          "nutritions-sugar",
          fruits[j].nutritions.sugar
        );
        fruitOption.setAttribute(
          "nutritions-calories",
          fruits[j].nutritions.calories
        );
        fruitOption.textContent = fruits[j].name;
        fruitSelects[i].appendChild(fruitOption);
      }
      //console.log(fruitSelects[i]);
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
            select.options[select.selectedIndex].getAttribute(
              "nutritions-carbohydrates"
            )
          ),
          protein: parseInt(
            select.options[select.selectedIndex].getAttribute(
              "nutritions-protein"
            )
          ),
          fat: parseInt(
            select.options[select.selectedIndex].getAttribute("nutritions-fat")
          ),
          sugar: parseInt(
            select.options[select.selectedIndex].getAttribute(
              "nutritions-sugar"
            )
          ),
          calories: parseInt(
            select.options[select.selectedIndex].getAttribute(
              "nutritions-calories"
            )
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
      const outputData = {
        name,
        email,
        phone,
        fruitsSelected,
        specialInstructions,
        totals,
        // userAgent: window.navigator.userAgent,
      };

      // Save output to localStorage
      localStorage.setItem(storageKey, JSON.stringify(outputData));

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
