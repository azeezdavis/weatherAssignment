let search = document.querySelector("#form-tag")
console.log(search)
// Set global variables, including Open Weather Maps API Key
var owmAPI = "788d5638d7c8e354a162d6c9747d1bdf";
var currentCity = "";
var lastCity = "";


// created a function to get and display current weather conditions on open weather maps
let currentConditions = function (event) {

    event.preventDefault();

    console.log(event.target[0].value)

    let cityName = event.target[0].value

// let weatherUrl = 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${owmAPI}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.main)
            // fetch(`http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}`)
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data)
                
            // });
        });

}
// const message = `The number is ${number}`;
search.addEventListener('submit', currentConditions);