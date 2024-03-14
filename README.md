# weather-dashboard

HTML

To start I added the bootstrap link, then I put my stylesheet under to overwrite any CSS I want to add. Also on the bottom I linked jquery and my JavaScript.

First was my header, just a simple one.

Then onto my body, which starts off with the div classes container and row used for column set up. Then I set my columns up in md-3 and md-9 for a nice ratio.

Then I have my search button and search id for styling it.

Lastly is currentWeather and forcast ids for seperate styling in CSS

CSS

First I styled my header added the width to cover the entire top. Added border box and inline block for good sizing.

next was seperate css for each id display block with a width of 20% for the information to flow well, then display flex and flex direction to make the 5 day forecast into a row.

JavaScript

First I set two const varibles for my button in my input using query selectors.

Then I made my first function, preventing default so that it doesnt default. 

Next I made a history "button" and added a const called searcher that equalled my query selector input, this targets eveyrthing put into that input.

Adding a event listener to the history buttons allows me to click on the newly displayed buttons that bring up the old data.

Then I append the old data to the page. Have to put append child because im targeting the children of the "button element I made.

Next is my api request functions, fisrt is I added city into a parameter in the api link to target weather in cities only.

I use fetch to grab the api then if the response is I get a response json then I fucntion the data and log it. 

Next is crating all my varibles for what I want to see on my page. 

I make the varible and create a element then I target what im grabbing from the api. I do this 4 times for the current weather and the forecast.

Then I made an else to for an alert to pop enter a city.

I made a for loop in the forecst function to grab 8 of the posts in the array because 3 hours is each one 3 * 8 equals 24 hours.

![visit my page here] 
![My project](./assets/Screenshot%20(15).png)