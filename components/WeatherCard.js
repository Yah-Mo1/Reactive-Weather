import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

//imported all our icons onto weathercard.js

function WeatherCard(props) {
  function icon() {
    if (props.city.forecast === "Sunny") {
      return sunny
    }
    if (props.city.forecast === "Rainy") {
      return rainy
    }
    if (props.city.forecast === "Partly Cloudy") {
      return partlyCloudy
    }
    else {
      return cloudy;
    }
  }
  return (
    // in the img className we conditionally render the icons based on the value stored in props.data.forecast
    <div className = "card">
    
        <div className = "img-container">
            <img className="card-img-top" src = {icon()} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.city.city}</h3>
            <h5 className="card-text">{props.city.temperature}</h5>
            <h5 className="card-text">{props.city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard

export default WeatherCard;
