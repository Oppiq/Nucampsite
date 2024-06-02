console.log("javascript connected!");

async function fetchWeather(){
    let apiKey = process.env.OPEN_WEATHER_API_KEY;
    let city = "tulsa";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        let weatherDetails = await displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}
fetchWeather()
// temperature, weather description, icon
async function displayWeather(data){
    let locationTemperature = data.main.temp;
    let locationWeatherDescription = data.weather[0].description;
    let locationIcon = data.weather[0].icon;

    let loc = (`https://openweathermap.org/img/w/${locationIcon}.png`);


    const weatherTemperature = document.querySelector("#weather-temp");
    const weatherDescription = document.querySelector("#weather-description");
    const weatherIcon = document.querySelector("#weather-icon");
    const iconImage = document.createElement('img');
    weatherTemperature.innerHTML = locationTemperature;
    weatherDescription.innerHTML = locationWeatherDescription;
    iconImage.src = loc;
    weatherIcon.appendChild(iconImage);
}
