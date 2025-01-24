// Weather API
const apiKey = "286ac2dad268bd74da7bbbe81a445b2d";
const searchBtn = document.querySelector(".searchBtn");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?
units=metric&q=`;

const checkWeather = async (city) => {
  console.log(city);
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

searchBtn.addEventListener("click", checkWeather((city = "Alaminos")));
