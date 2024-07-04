async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '242f1dfdfbe410708115e2efc0b8c96f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityNameS').textContent = `Місто: ${data.name}`;
            document.getElementById('temperatureS').textContent = `Температура: ${data.main.temp} °C`;
            document.getElementById('descriptionS').textContent = `Опис: ${data.weather[0].description}`;
        } else {
            document.getElementById('cityNameS').textContent = `Місто не знайдено`;
            document.getElementById('temperatureS').textContent = '';
            document.getElementById('descriptionS').textContent = '';
        }
    } catch (error) {
        console.error('Помилка:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async(position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = '242f1dfdfbe410708115e2efc0b8c96f';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=uk`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.cod === 200) {
                    document.getElementById('cityName').textContent = `Місто: ${data.name}`;
                    document.getElementById('temperature').textContent = `Температура: ${data.main.temp} °C`;
                    document.getElementById('description').textContent = `Опис: ${data.weather[0].description}`;
                } else {
                    document.getElementById('cityName').textContent = `Місто не знайдено`;
                    document.getElementById('temperature').textContent = '';
                    document.getElementById('description').textContent = '';
                }
            } catch (error) {
                console.error('Помилка:', error);
            }
        }, (error) => {
            console.error('Геолокація недоступна або була відхилена', error);
        });
    } else {
        console.error('Геолокація не підтримується цим браузером');
    }
});