$(document).ready(function() {
    let api = "03ede9e0ae084cfeba6896b53f5b2da5";
    var lat, lon;

    function getCity() {
        if ($("#searchCity").val() == "") {
            return "Canada";
        } else {
            return $("#searchCity").val();
        }
    }

    function getWeatherDate(ms, add) {
        var dat = new Date();
        var year = dat.getFullYear();
        var month = dat.getMonth() + 1;
        var day = dat.getDate() + add;
        return day + "-" + month + "-" + year;


    }

    function getLocation() {
        let city = getCity();
        let urlCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + api;

        $.getJSON(urlCall, function(data) {
            lat = data.coord.lat;
            lon = data.coord.lon;
            getForecast(lat, lon);
        });




    }



    function getForecast(lat, lon) {
        let mycity = getCity();
        let urlCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${api}`;
        $.getJSON(urlCall, function(data) {
            let weather = data.daily;
            $("#result").html("");
            for (var i = 0; i < weather.length; i++) {
                $("#result").append(`<div class="col-6 col-md-3 weather-card mt-2">
                        <h5 class="text-center">${getWeatherDate(weather[i].dt,i)}</h5>
                        <div class="row">
                            <div class="col">
                                <img class="weather-ico text-center" src="http://openweathermap.org/img/wn/${weather[i].weather[0].icon}@4x.png">

                            </div>
                            <div class="col">
                                <p class="weather-temp text-center"><span class="max-temp">${weather[i].temp.max}&deg;C</span>|<span class="min-temp">${weather[i].temp.min}&deg;C</span></p>
                                <p class="weather-desc text-center">${weather[i].weather[0].main}</p>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col">
                                <p class="day-Windspeed">${weather[i].wind_speed}<br>Windspeed</p>
                            </div>
                            <div class="col">
                                <p class="day-pressure">${weather[i].pressure}<br>Pressure</p>
                            </div>
                            <div class="col">
                                <p class="day-humidity">${weather[i].humidity}<br>Humidity</p>
                            </div>
                        </div>
                    </div>`);
            }
        }).fail(function() {
            alert("City Not found.Enter Correct City Name");
        });

    };


    $("#ForecastWeather").on("click", function() {
        if ($("#searchCity").val() == "") {
            alert("Please Enter City Name");
        } else {
            getLocation();
        }
    });
    getLocation();

});