import React, { useState, useEffect } from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY


const Weather = ({ country }) => {
    const [weather, setWeather] = useState([])
    
    const hook = () => {
        axios
            .get('http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + country.capital)
            .then(response => {
                console.log("weather set")
                setWeather(response.data)
            })
    }
    useEffect(hook, [])
if (weather.length !== 0) {
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weather.current.temperature}</p>
            <img src={weather.current.weather_icons[0]} alt="weatherIcon" width='150px' />
            <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
    } else {
        return <p>Loading weather</p>
    }
}

export default Weather
