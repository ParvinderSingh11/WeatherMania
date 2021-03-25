$(document).ready(function() {
    let api = "03ede9e0ae084cfeba6896b53f5b2da5";

    function getCity() {
        if ($("#searchCity").val() == "") {
            return "Canada";
        } else {
            return $("#searchCity").val();
        }
    }

    function getTimeInHours(ms) {
        var milliseconds = parseInt((ms % 1000) / 100),
            seconds = Math.floor((ms / 1000) % 60),
            minutes = Math.floor((ms / (1000 * 60)) % 60),
            hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    function getWeather() {

        let city = getCity();
        let urlCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + api;
        //let data = JSON.parse('{"coord":{"lon":-0.8141,"lat":38.6767},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":10.57,"feels_like":7.88,"temp_min":8.89,"temp_max":11.67,"pressure":1009,"humidity":61},"visibility":10000,"wind":{"speed":1.79,"deg":258,"gust":4.02},"clouds":{"all":99},"dt":1616170962,"sys":{"type":3,"id":18778,"country":"ES","sunrise":1616134095,"sunset":1616177624},"timezone":3600,"id":6355428,"name":"Cañada","cod":200}');
        $.getJSON(urlCall, function(data) {
            $("#city").text(city).css('textTransform', 'capitalize');;
            $("#weather-status").text(data.weather[0].main);
            $(".weather-icon").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
            //set date
            let date = new Date();
            $("#day").text(date.getDate());
            $("#date").text(date.getMonth() + "/" + date.getFullYear());
            $("#time").text(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
            $("#weather-status").text(data.weather[0].main);
            $("#temperature").text(data.main.temp);
            //other details
            $(".windspeed").text(data.wind.speed + "Km / h ");
            $(".humidity").text(data.main.humidity + "%");
            $(".pressure").text(data.main.pressure + "hPa");

        }).fail(function() {
            alert("City Not found.Enter Correct City Name");
        });
    }
    $("#searchWeather").on("click", function() {
        if ($("#searchCity").val() == "") {
            alert("Please Enter City Name");
        } else {
            getWeather();
        }
    });
    getWeather();


});