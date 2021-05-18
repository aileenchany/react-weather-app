import React from "react";

export default function FormattedDate(props) {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[props.date.getDay()]; //getDay() takes the day of the week as a number & we get the day from the days array
    let month = props.date.getMonth() + 1; //returns a num from 0-11, hence the + 1
    let date = props.date.getDate(); //returns a num from 1-31
    let hours = props.date.getHours(); //below conditional fixes the universal time to American time of 12 hrs
        if (hours > 12) {
            hours -= 12;
        }
    let minutes = props.date.getMinutes(); //below conditional fixes bug when minutes are less than 10
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
    let am_pm = props.date.getHours() >=12 ? "pm" : "am";
       
    
    return (
      <span>{day}, {month}/{date}, {hours}:{minutes} {am_pm}</span>
    )
}