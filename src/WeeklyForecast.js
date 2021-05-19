import React, {useState} from "react";
import DailyForecast from "./DailyForecast.js";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily); //here we store the weekly forecast inside the "forecast" state manager
        setLoaded(true);
    }

    if(loaded) {
        return(
            <div className="WeeklyForecast">
                <DailyForecast data={forecast[0]} />
            </div>
         ) ;
    } else {
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}