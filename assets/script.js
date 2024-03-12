const searchInputEl = document.querySelector('#search');
const searchBtnEl = document.querySelector('#search-btn');


const searchHandler = function (event) {
    event.preventDefault();

    const searcher = searchInputEl.value.trim();

    if (searcher) {
        getWeather(searcher);

        searchInputEl.value = '';
    } 
        


}


const getWeather = function (city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9898dc8d721936b2fb56457b35b82a47`

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data, city);
            });
        } else {
            alert(`Error: Enter a city`);
        }
    })
}

searchBtnEl.addEventListener('click', searchHandler);