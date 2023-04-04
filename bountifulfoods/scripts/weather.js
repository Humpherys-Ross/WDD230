const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#desc-temp");
const windspeed = document.querySelector("#speed");

const url =
  "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=c7b2d8e89bc3ae4c8801d9dfb95c355a&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
