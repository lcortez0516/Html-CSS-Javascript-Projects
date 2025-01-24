// Weather API
const apiKey = "";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?
units=metric&q=`;

const searchBtn = document.querySelector(".searchBtn");

const checkWeather = async () => {
  // get city input
  const city = document.querySelector(".search input").value || "Bolinao";
  try {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    if (!response.ok) {
      alert("Fetch Error");
      return;
    }
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.log(error + "Server Error");
  }
};

function renderData(data) {
  // change image
  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  }

  //change City name
  document.querySelector(".city").textContent = data.name;
  //change temperature
  document.querySelector(".temp").textContent =
    Math.round(data.main.temp) + "°C";
  //change temperature
  document.querySelector(".humidity").textContent = data.main.humidity + "%";
  //change temperature
  document.querySelector(".wind").textContent = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", checkWeather);
