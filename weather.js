//show today's weather and geolocation inforamtion
const weather=document.querySelector('#weather span');
const city=document.querySelector('#location span');

const API_KEY = "40549118d578fae6be3d40f2b8b07810";
 
function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lng = position.coords.longitude;
 console.log("You live in", lat, lng);
 const lon = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 fetch(url)
   .then((response) => response.json())
   .then((data) => {
     city.innerText = `Your current location is ${data.name}`;
     weather.innerText = `Today's weather: ${data.weather[0].main} and Temperature: ${data.main.temp}°C `;
   });
}
function onGeoError() {
 alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);