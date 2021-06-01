import React, {useState, useEffect} from "react";
import DailyForecast from "./DailyForecast.js";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    //useEffect is a state manager that allows us to update something after the page has already loaded
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily); //here we store the weekly forecast inside the "forecast" state manager
        setLoaded(true);
    }

    function callApi() {
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiKey = "f9ed2779c7a88244e3c6c97a1ad830b5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if(loaded) {
        return(
            <div className="WeeklyForecast">
                <div className="row">
                    {forecast.map((dailyForecast, index) => {
                        if(index < 5) {
                            return (
                                <div className="col" key={index} >
                                    <DailyForecast data={dailyForecast} unit={props.unit} />
                                </div> 
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>   
            </div>
         ) ;
    } else {
        callApi();

        return null;
    }
}