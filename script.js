const api = "https://api.open-meteo.com/v1/forecast?latitude=47&longitude=20&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,wind_speed_10m_max&hourly=rain,temperature_2m,temperature_80m&current=temperature_2m,rain&timezone=Europe%2FBerlin&forecast_days=1"

fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.current.time.substring(0, 10));
        
        document.getElementById("datum").textContent = data.current.time.substring(0, 10);
        document.getElementById("napkelte").textContent = data.daily.sunrise[0].substring(11, 16);
        document.getElementById("napnyugta").textContent = data.daily.sunset[0].substring(11, 16);
        document.getElementById("maxhom").textContent = data.daily.temperature_2m_max[0] + "°C";
        
        
        
    })