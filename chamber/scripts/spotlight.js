const dataURL =
  "https://humpherys-ross.github.io/wdd230/chamber/scripts/data.json";

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);

    const businesses = jsonObject["businesses"];
  });
