import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="App">
          <h1>Weather App</h1>
          <div className="row">
             {/* search section */}
            <form>
              <input type="search" placeholder="Type a city..." />
              <button type="submit">Search</button>
              <button type="submit">Location</button>
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
          <div className="row">
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

          <hr />
        </div>
      </div>
      <footer><a href="https://github.com/aileenchany/react-weather-app" target="_blank">Open-source</a> code by <a href="https://www.linkedin.com/in/aileen-chanmiranda/" target="_blank">ACM</a></footer>
    </div>
  );
}
