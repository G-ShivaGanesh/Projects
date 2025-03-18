document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd4011bad195da1c4ac3b3d88a3a35061'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

    const cityInput = document.getElementById('city-input');
    const getWeatherButton = document.getElementById('get-weather');
    const weatherData = document.getElementById('weather-data');

    getWeatherButton.addEventListener('click', () => {
        const cityName = cityInput.value;
        if (cityName.trim() !== '') {
            getWeather(cityName);
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`${apiUrl}&q=${city}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            displayWeatherData(data);
        } catch (error) {
            weatherData.innerHTML = 'City not found';
        }
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;

        const weatherInfo = `
            <h2>Weather in ${name}:</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        weatherData.innerHTML = weatherInfo;
    }
});
