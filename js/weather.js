async function getWeatherForecast() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.58&longitude=-71.47&daily=temperature_2m_max,temperature_2m_min,sunrise,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=3');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const daily = data.daily;
        const units = data.daily_units;

        // Clear table
        const tbody = document.getElementById('weatherTableBody');
        tbody.innerHTML = '';

        // display data
        daily.time.forEach((date, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${date}</td>
                <td>${daily.temperature_2m_max[index]} ${units.temperature_2m_max}</td>
                <td>${daily.temperature_2m_min[index]} ${units.temperature_2m_min}</td>
                <td>${daily.sunrise[index]}</td>
                <td>${daily.precipitation_probability_max[index]} ${units.precipitation_probability_max}</td>
            `;
            tbody.appendChild(row);
        });

    } catch (error) {
        console.error('Error fetching weather forecast:', error);
        const weatherError = document.getElementById('weather-error');
        weatherError.style.display='block';

        const tbody = document.getElementById('weatherTableBody');
        tbody.innerHTML = `<tr><td colspan="5">Error loading weather data. Please try again later.${error}</td></tr>`;
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    getWeatherForecast();
});