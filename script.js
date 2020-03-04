var apiKey = "&appid=d1b0620438316662aec4d0a6b1ce8f39";
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById('submitWeather').addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var zip = document.getElementById("weather-form").value;
        var payload = "https://api.weather.gov/stations/" + zip + "/observations/latest";
        req.open("GET", payload, true);
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById("temp").textContent = response.properties.temperature.value + " C";
                console.log(JSON.parse(response.properties.presentWeather));

            } else {
                document.getElementById("currCity").textContent = "Error!";
                document.getElementById("temp").textContent = "Error!";
                document.getElementById("hum").textContent = "Error!";
            }
        });
        req.send();
        event.preventDefault();
    })
}