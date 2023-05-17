//TODO4 We need to search the data array passed as a prop to find the object that has the city that matches our location state.
import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"

function Location({cities, location, setLocation}) {
    console.log(`cities = ${JSON.stringify(cities)}`)
    console.log(`location = ${JSON.stringify(location)}`) //location is undefined

    const object = cities.find(object => object.city === location)
    console.log(object);
    function icon() {
        if (!object) {
            return cloudy
        }
        else if (object.forecast === "Sunny") {
          return sunny
        }
        else if (object.forecast === "Rainy") {
          return rainy
        }
        else if(object.forecast === "Partly Cloudy") {
          return partlyCloudy
        }
      }
      //TODO5 Once you have found the corresponding data, return a card similar to the one in WeatherCard.js. It can look similar to the card below.
    return (
        <div className = "card">
    
        <div className = "img-container">
            <img className="card-img-top" src = {icon()} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">The weather in {object.city} is</h3>
            <h3 className="card-text">{object.temperature} C</h3>
            <h5 className="card-text">{object.forecast}</h5>
        </div>
    </div>
    )


}






export default Location;