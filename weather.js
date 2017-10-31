
let getWeather = function(info) {
  let latitude = info.coords.latitude;
  let longitude = info.coords.longitude;
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
  // return {"coord":{"lon":-87.63,"lat":41.88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":44.13,"pressure":1008,"humidity":56,"temp_min":42.8,"temp_max":46.4},"visibility":16093,"wind":{"speed":24.16,"deg":280,"gust":16.5},"clouds":{"all":90},"dt":1509399300,"sys":{"type":1,"id":966,"message":0.1661,"country":"US","sunrise":1509366117,"sunset":1509403540},"id":4887398,"name":"Chicago","cod":200}
}

let convertToJSON = function(zebra) {
return zebra.json();
}

let updateWeather = function(dataFromService) {
  let temp = dataFromService.main.temp.toFixed(0)
  document.getElementsByClassName('card-text')[0].innerHTML = "It is " + temp + " degrees outside."
  let name = dataFromService.name
  document.getElementsByClassName('card-title')[0].innerHTML = name
  let icon = dataFromService.weather[0].icon
  document.getElementsByClassName('card-img-top  bg-primary').innerHTML.src = "http://openweathermap.org/img/w/" + icon + ".png"
}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}

// getWeather()

let whereIBe = function(info) {
  // Part II
  console.debug(info)
  console.debug('Latitude ' + info.coords.latitude + ' Longitude ' + info.coords.longitude)
  getWeather(info)

};

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
  event.preventDefault();
  // getWeather()

  navigator.geolocation.getCurrentPosition(whereIBe);
});

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
// https://api.openweathermap.org/data/2.5/weather?lat=41.8781&lon=-87.6298&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial
