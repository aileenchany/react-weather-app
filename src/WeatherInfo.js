import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* main weather section */}
                <div className="row">
                    <div className="col-6">
                    <p className="location">{props.data.city}, {props.data.country}</p>
                    <ul className="info">
                        <li>
                            Last updated: <FormattedDate date={props.data.date} /> {/* Here we create the Date component and we're passing the date data as props */}
                        </li> 
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <img src={props.data.icon} alt={props.data.description} className="main-icon" /> <span className="temperature">{Math.round(props.data.temperature)}</span><span className="units"> <a href="/">°F</a> | <a href="/">°C</a></span> 
                    </div>          
                </div>
                {/* weather conditions */}
                <div className="row weather-conditions">
                    <div className="col-3">
                    Feels like: {Math.round(props.data.feels_like)}°
                    </div>
                    <div className="col-3">
                    H/L: {Math.round(props.data.temp_max)}° {Math.round(props.data.temp_min)}°
                    </div>
                    <div className="col-3">
                    Humidity: {props.data.humidity}%
                    </div>
                    <div className="col-3">
                    Winds: {Math.round(props.data.wind)} mph
                    </div>
                </div>
        </div>
    )
}