const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const weatherDisplay = document.getElementById('weather-display');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const errorMessage = document.getElementById('error-message');
const weatherIcon = document.getElementById('weather-icon');

const API_KEY = 'Your-API-KEY';

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim(); 
    if (city) {
        fetchWeatherData(city);
    } else {
        displayError('Please enter a city name.');
    }
});

async function fetchWeatherData(city) {
    weatherDisplay.style.display = 'none';
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            displayError(data.message || 'City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('Could not fetch weather data. Please check your internet connection.');
    }
}

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    weatherDisplay.style.display = 'none';
}

function displayWeather(data) {
    // From where all data came? --> https://openweathermap.org/current
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windspeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    weatherDisplay.style.display = 'block';
    errorMessage.classList.add('hidden');
}
