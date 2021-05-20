import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function celsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if(unit === "fahrenheit") {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">{Math.round(props.temperature)}</span><span className="units"> °F | <a href="/" onClick={celsius}>°C</a></span>
            </span>
        );
    } else {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">{Math.round((props.temperature - 32) * 5/9)}</span><span className="units"> °C | <a href="/" onClick={fahrenheit}>°F</a></span>
            </span>
        ); 
    }
}