import React from "react";

export default function WeatherTemperature(props) {
    function celsius(event) {
        event.preventDefault();
        props.setUnit("celsius");
    }

    function fahrenheit(event) {
        event.preventDefault();
        props.setUnit("fahrenheit");
    }

    if(props.unit === "fahrenheit") {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">{Math.round(props.temperature)}</span>
                <span className="units">
                    {" "}
                    °F |{" "}
                    <a href="/" onClick={celsius}>
                        °C
                    </a>
                </span>
            </span>
        );
    } else {
        return (
            <span className="WeatherTemperature">
                <span className="temperature">
                    {Math.round((props.temperature - 32) * 5/9)}
                </span>
                <span className="units">
                    {" "}
                    °C |{" "}
                    <a href="/" onClick={fahrenheit}>
                        °F
                    </a>
                </span>
            </span>
        ); 
    }
}