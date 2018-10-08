import React from "react"

export const WeatherList = (props) => (
  props.weather.map((weather) => {
    return <div key={weather.id}>
      <span><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='' />  </span>
      <span> {weather.description} </span>
    </div>
  })
);
