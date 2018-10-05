import React from "react";
import {WeatherList} from './weatherList';

export const CityInfo = (props) => (
      <div>
        <span>city:{props.city.name} </span>
        <span>temp:{(props.city.main.temp - 273.15).toFixed(2)}</span>
        <WeatherList weather={props.city.weather} />
      </div>
);


// function functionName(city) {
//   city.weather.map((weather) => {
//     <span><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} /> </span>
//     <span>description: {weather.description}</span>
//   })
// }


// export default class CityInfo extends React.Component(props) {
//  functionName(city) {
//     city.weather.map((weather) => {
//       <span><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} /> </span>
//       <span>description: {weather.description}</span>
//     })
//   }
//
//   render() {
//     return (
//
//     )
//   }
// }
