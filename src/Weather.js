import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather() {
    
    const [weather, setWeather] = useState({ready: false});
    
    function getData(response) {
        setWeather({
            ready: true,
            city: response.data.name,
            country: response.data.sys.country,
            date: new Date(response.data.dt * 1000), //new Date() collects the data for the date & we're storing it inside weather.date
            description: response.data.weather[0].description,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
                    <form>
                        <div className="row" >
                            <div className="col-7">
                                <input type="search" placeholder="Type a city..." autoFocus="on" autoComplete="off" className="form-control" />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-outline-secondary search-button"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="search-icon"
                        >
                        <path
                            d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
                        />
                        <linearGradient id="my-gold-gradient-1" x2="1" y2="1">
                            <stop offset="0%" stopColor="#d8ab50" />
                            <stop offset="65%" stopColor="#fbf5b7" />
                            <stop offset="100%" stopColor="#aa771c" />
                        </linearGradient>
                        </svg></button>                    
                                <button type="submit" className="btn btn-outline-secondary location-button"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="location-icon"
                        >
                        <path
                            d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                        />
                        <linearGradient id="my-gold-gradient-2" x2="1" y2="1">
                            <stop offset="0%" stopColor="#d8ab50" />
                            <stop offset="65%" stopColor="#fbf5b7" />
                            <stop offset="100%" stopColor="#aa771c" />
                        </linearGradient>
                        </svg></button>
                            </div> 
                        </div> 
                    </form>
                </div>
                {/* main weather section */}
                <div className="row">
                    <div className="col-6">
                    <p className="location">{weather.city}, {weather.country}</p>
                    <ul className="info">
                        <li>
                            Last updated: <FormattedDate date={weather.date} /> {/* Here we create the Date component and we're passing the date data as props */}
                        </li> 
                        <li className="text-capitalize">{weather.description}</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <img src={weather.icon} alt={weather.description} className="main-icon" /> <span className="temperature">{Math.round(weather.temperature)}</span><span className="units"> <a href="/">°F</a> | <a href="/">°C</a></span> 
                    </div>          
                </div>
                {/* weather conditions */}
                <div className="row weather-conditions">
                    <div className="col-3">
                    Feels like: {Math.round(weather.feels_like)}°
                    </div>
                    <div className="col-3">
                    H/L: {Math.round(weather.temp_max)}° {Math.round(weather.temp_min)}°
                    </div>
                    <div className="col-3">
                    Humidity: {weather.humidity}%
                    </div>
                    <div className="col-3">
                    Winds: {Math.round(weather.wind)} mph
                    </div>
                </div>
            </div>
        );   
   } else { //making an API call inside a conditional if statement will avoid an endless API call loop
        let defaultCity = "New York";
        let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(getData);

        return (
            <Loader
        type="Rings"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={3000} //3 secs
      />
        );
   }       
} 