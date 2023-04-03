const dataURL =
  "https://raw.githubusercontent.com/Humpherys-Ross/wdd230/main/bountifulfoods/scripts/data.json";

fetch(dataURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);

    const fruits = jsonObject["fruits"];
  });
