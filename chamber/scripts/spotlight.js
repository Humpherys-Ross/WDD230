const dataURL =
  "https://humpherys-ross.github.io/wdd230/chamber/scripts/data.json";

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);

    const businesses = jsonObject["businesses"];
    const goldCompanies = businesses.filter(
      (company) => company.status === "gold"
    );
    const silverCompanies = businesses.filter(
      (company) => company.status === "silver"
    );

    // randomly select a gold company
    const goldCompany =
      goldCompanies[Math.floor(Math.random() * goldCompanies.length)];
    const goldDiv = document.querySelector(".aside div:first-of-type");
    goldDiv.innerHTML = `<h3>${goldCompany.name}</h3>
                         <img src="${goldCompany.images}" alt="${goldCompany.name}">
                         <p>${goldCompany.phone}</p>`;

    // randomly select a silver company
    const silverCompany =
      silverCompanies[Math.floor(Math.random() * silverCompanies.length)];
    const silverDiv = document.querySelector(".aside div:nth-of-type(2)");
    silverDiv.innerHTML = `<h3>${silverCompany.name}</h3>
                           <img src="${silverCompany.images}" alt="${silverCompany.name}">
                           <p>${silverCompany.phone}</p>`;

    //randomly select a second silver company that hasn't been selected already
    // Randomly select a second silver status company that has not been selected yet and insert its name, image, and phone number into the third div
    const remainingSilverCompanies = silverCompanies.filter(
      (company) => company !== silverCompany
    );
    const secondSilverCompany =
      remainingSilverCompanies[
        Math.floor(Math.random() * remainingSilverCompanies.length)
      ];
    const spotlightDiv = document.querySelector(".spotlight3");
    spotlightDiv.innerHTML = `<h3>${secondSilverCompany.name}</h3>
                              <img src="${secondSilverCompany.images}" alt="${secondSilverCompany.name}">
                              <p>${secondSilverCompany.phone}</p>`;
  });
