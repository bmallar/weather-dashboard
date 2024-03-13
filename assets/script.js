const searchInputEl = document.querySelector('#search');
const searchBtnEl = document.querySelector('#search-btn');


const searchHandler = function (event) {
    event.preventDefault();

    const searcher = searchInputEl.value.trim();

    if (searcher) {
        getWeather(searcher);
        displayWeather(searcher)

        const historyBtn = document.createElement("button")
        historyBtn.textContent = searcher
        document.getElementById("searchHistory").append(historyBtn)

        searchInputEl.value = '';
    }



}


const getWeather = function (city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9898dc8d721936b2fb56457b35b82a47&units=imperial`
    document.getElementById("currentWeather").innerHTML = ''
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    // displayWeather(data, city);

                    var weatherCard = document.createElement("div")
                    weatherCard.setAttribute("class", "weatherCard")

                    var currentTemp = document.createElement("h3")
                    currentTemp.textContent = "Temp: " + data.main.temp + " F"

                    var humidity = document.createElement("h3")
                    humidity.textContent = "Humidity: " + data.main.humidity + "%"

                    var icon = document.createElement("img")
                    icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

                    var windSpeed = document.createElement("h3")
                    windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH"
                    weatherCard.append(icon, currentTemp, windSpeed, humidity)
                    document.getElementById("currentWeather").append(weatherCard)
                });
            } else {
                alert(`Error: Enter a city`);
            }
        })
}

const displayWeather = function (city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9898dc8d721936b2fb56457b35b82a47&units=imperial`

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    document.getElementById("forecast").innerHTML = ''
                    for (let index = 4; index < data.list.length; index = index + 8) {
                        const element = data.list[index];
                        console.log(element)
                        var forecastCard = document.createElement("div")
                        forecastCard.setAttribute("class", "forecastCard")

                        var forecastTemp = document.createElement("p")
                        forecastTemp.textContent = "Temp: " + element.main.temp + " F"

                        var humidity = document.createElement("p")
                        humidity.textContent = "Humidity: " + element.main.humidity + "%"

                        var icon = document.createElement("img")
                        icon.setAttribute("src", `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`)

                        var windSpeed = document.createElement("p")
                        windSpeed.textContent = "Wind Speed: " + element.wind.speed + " MPH"

                        forecastCard.append(icon, forecastTemp, windSpeed, humidity)
                        document.getElementById("forecast").append(forecastCard)
                    }

                });
            } else {
                alert(`Error: Enter a city`);
            }
        })
}



searchBtnEl.addEventListener('click', searchHandler);
historyBtn.addEventListener('click', searchHandler);