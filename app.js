// Reemplaza 'TU_API_KEY' con tu API key de OpenWeatherMap
const apiKey = '36650e1934bd54d9101d96e59db73001';

function buscarClima() {
    const city = document.getElementById('cityInput').value;
    obtenerClima(city);
}

function obtenerClima(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Clima en ${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Clima: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
        });
}
