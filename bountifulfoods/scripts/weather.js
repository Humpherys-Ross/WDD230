const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=c7b2d8e89bc3ae4c8801d9dfb95c355a&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  // update current weather information
  document.getElementById("temperature").innerHTML = data.main.temp;
  document.getElementById("humidity").innerHTML = data.main.humidity;
  document.getElementById("desc-temp").innerHTML = data.weather[0].description;
  document.getElementById(
    "weather-icon"
  ).src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

const url1 =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=c7b2d8e89bc3ae4c8801d9dfb95c355a&units=imperial";

async function apiForecast() {
  try {
    const response = await fetch(url1);
    if (response.ok) {
      const forecast = await response.json();
      console.log(forecast); // this is for testing the call
      displayForecast(forecast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiForecast();

function displayForecast(forecast) {
  for (let i = 0; i < 3; i++) {
    const forecastDay = forecast.list[i * 8]; // get the forecast for every 24 hours (8 * 3 = 24)
    const date = new Date(forecastDay.dt * 1000); // convert Unix timestamp to JavaScript date
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" }); // format the day of the week
    const iconUrl = `https://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png`; // get the URL of the weather icon

    document.getElementById(`day${i + 1}`).innerHTML = dayOfWeek;
    document.getElementById(
      `day${i + 1}-temp`
    ).innerHTML = `${forecastDay.main.temp.toFixed(0)} °F`;
    document.getElementById(`day${i + 1}-icon`).src = iconUrl;
  }
}
