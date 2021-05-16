import React from "react";
import "./Weather.css";

export default function Weather() {
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
                        <button type="submit" className="btn btn-outline-secondary search-button">Search</button>                    
                        <button type="submit" className="btn btn-outline-secondary location-button">Location</button>
                    </div> 
                </div> 
            </form>
          </div>
          {/* main weather section */}
          <div className="row">
            <div className="col-6">
              <p className="location">New York, US</p>
              <ul className="info">
                <li>Last updated: Sat, 5/15, 15:52 pm</li>
                <li>Clear sky</li>
              </ul>
            </div>
            <div className="col-6">
              <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" className="main-icon" /> <span className="temperature">73</span><span className="units"> <a href="/">°F</a> | <a href="/">°C</a></span> 
            </div>          
          </div>
          {/* weather conditions */}
          <div className="row weather-conditions">
            <div className="col-3">
              Feels like: 72°
            </div>
            <div className="col-3">
              H/L: 77° 68°
            </div>
            <div className="col-3">
              Humidity: 25%
            </div>
            <div className="col-3">
              Winds: 6 mph
            </div>
          </div>

        </div>
    )
}