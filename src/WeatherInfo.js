import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* main weather section */}
                <div className="row">
                    <div className="col-6">
                        <p className="location">{props.data.city}, {props.data.country}</p>
                        <div className="info">
                            <div>
                                Last updated: <FormattedDate date={props.data.date} /> {/* Here we create the Date component and we're passing the date data as props */}
                            </div> 
                            <div className="text-capitalize">{props.data.description}</div>
                        </div>
                    </div>
                    <div className="col-6 padding">
                        <WeatherIcon code={props.data.icon} size={55} />
                        <WeatherTemperature temperature={props.data.temperature} />
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