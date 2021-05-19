import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeeklyForecast">
            <div className="week-day">Wed</div>
            <WeatherIcon code="01d" size={45} />
            <div><span className="max-temp">89°</span><span className="min-temp">80°</span></div>
        </div>
    ) ;
}