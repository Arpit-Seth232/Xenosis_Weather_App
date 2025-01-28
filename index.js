const API_KEY = '1dbb743b3ea9a55cb409784f36b7e234';

document.getElementById('search-btn').addEventListener('click', fetchWeather);

async function fetchWeather() {
  const city = document.getElementById('city-input').value;
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { temp } = data.main;
  const { description, icon } = data.weather[0];

  document.getElementById('location').textContent = `${name}`;
  document.getElementById('temperature').textContent = `${temp}°C`;
  document.getElementById('condition').textContent = `Condition : ${description}`;
  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
