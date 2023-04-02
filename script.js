//For apikey and apiurl
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="3188527ea96b1a74573d07a068b64e81";

const state = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humid = document.querySelector('.humid');
const wind = document.querySelector('.wind');

const searchbox=document.querySelector('.searchbox');
const btn = document.querySelector('.btn');

const weather_icon = document.querySelector('.weathericon');

const weather = document.querySelector('.weather');
const error = document.querySelector('.error');

async function checkweather(city)
{
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data = await response.json();
    if(response.status=="404")
    {
           error.style.display="block";
           weather.style.display = "none";
    }
    else {
    state.innerText=data.name;
    temp.innerHTML=data.main.temp + "°C";
    humid.innerHTML=data.main.humidity + "% humid";
    wind.innerHTML=data.wind.speed + "km/h";
    if(data.weather[0].main=="Clouds")
    {
        weather_icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear" || data.weather[0].main=="Haze")
    {
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weather_icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weather_icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weather_icon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weather_icon.src="images/mist.png";
    }
    weather.style.display = "block";
    error.style.display="none";
    }
}
btn.addEventListener('click',()=>{
    checkweather(searchbox.value);
})