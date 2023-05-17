import React from 'react';
// Import data and WeatherCard here
//TODO1 import useState from react
import {useState} from "react"
import WeatherCard from "./components/WeatherCard.js"
//TODO2 import locations component file from components folder
import Location from "./components/Location.js"
import cities from "./data.js"

function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
            <Location cities = {cities} location = {location} setLocation = {setLocation}/>
                {cities.map((city) => <WeatherCard city = {city}/>)}
                


            </div>
            
        </>
        //TODO3 Pass the data, location, and state setter function as props to the Location component.
    )
}

export default App;