import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
    return(
        <div className="WeeklyForecast">
            <div className="week-day">Wed</div>
            <WeatherIcon code="01d" size={45} />
            <div><span className="max-temp">89°</span><span className="min-temp">80°</span></div>
        </div>
    ) ;
}