import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeeklyForecast from "./WeeklyForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});
    const [unit, setUnit] = useState("fahrenheit");

    function searchLocation(position) {
        let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(getData);
    }

    function getLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
    }

    function searchCity() { //Note to self - the API call must always be inside a function, otherwise it's an endless loop
        let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(getData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchCity();
    }
    
    function updateCity(event) {
        setCity(event.target.value);
    }

    function getData(response) {
        setWeather({
            ready: true,
            city: response.data.name,
            coordinates: response.data.coord,
            country: response.data.sys.country,
            date: new Date(response.data.dt * 1000), //new Date() collects the data for the date & we're storing it inside weather.date
            description: response.data.weather[0].description,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            temp_max: response.data.main.temp_max,
            temp_min: response.data.main.temp_min,
            wind: response.data.wind.speed
        });
    }

   if(weather.ready) { //if boolean is set to true it will run the first condition; else, it will make the api call,load the spinner while collecting and storing data, and rendering the page
       return (
            <div className="Weather">
                <div className="row">
                    {/* search section */}
                    <form onSubmit={handleSubmit}>
                        <div className="row" >
                            <div className="col-7">
                                <input 
                                    type="search" 
                                    placeholder="Type a city..." 
                                    autoFocus="on" 
                                    autoComplete="off" 
                                    onChange={updateCity} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="col">
                                <button 
                                type="submit" 
                                className="btn btn-outline-secondary search-button" 
                                value="search">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="search-icon"
                                    >
                                        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                                        <linearGradient id="my-gold-gradient-1" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#d8ab50" />
                                            <stop offset="65%" stopColor="#fbf5b7" />
                                            <stop offset="100%" stopColor="#aa771c" />
                                        </linearGradient>
                                     </svg>
                                </button>                    
                                <button 
                                type="submit" 
                                className="btn btn-outline-secondary location-button" 
                                onClick={getLocation} 
                                value="location">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="location-icon"
                                    >
                                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                                        <linearGradient id="my-gold-gradient-2" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#d8ab50" />
                                            <stop offset="65%" stopColor="#fbf5b7" />
                                            <stop offset="100%" stopColor="#aa771c" />
                                        </linearGradient>
                                    </svg>
                                </button>
                            </div> 
                        </div> 
                    </form>
                </div>
                <WeatherInfo data={weather} unit={unit} setUnit={setUnit} />
                <hr />
                <WeeklyForecast coordinates={weather.coordinates} unit={unit} />
            </div>
        );   
   } else { 
        searchCity();

        return null;
   }       
} 