const getWeather = function () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=key`

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data.items)
            })
        }
    })
}