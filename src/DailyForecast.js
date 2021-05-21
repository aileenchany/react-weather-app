import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function DailyForecast(props) {

    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

     function celsiusMaxTemp() {
        let temperature = Math.round(((props.data.temp.max - 32) * 5) / 9);
        return `${temperature}°`;
    }

    function celsiusMinTemp() {
        let temperature = Math.round(((props.data.temp.max - 32) * 5) / 9);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        
        return days[day];
    }

    if (props.unit === "fahrenheit") {
        return (
            <div>
                <div className="week-day">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={45} />
                <div>
                    <span className="max-temp">{maxTemp()}</span>
                    <span className="min-temp">{minTemp()}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="week-day">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={45} />
                <div>
                    <span className="max-temp">{celsiusMaxTemp()}</span>
                    <span className="min-temp">{celsiusMinTemp()}</span>
                </div>
            </div>
        );
    }
    
}