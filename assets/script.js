const APIkey = "51688b83c80c3d8d576f988092807cd1";

button.addEventListener("click", function () {
fetch("https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={51688b83c80c3d8d576f988092807cd1}")
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData) 
    }) 
    
})
document.body.scrollIntoView(false);