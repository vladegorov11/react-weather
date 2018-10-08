import React from "react";
import {WeatherList} from './weatherList';

export const CityInfo = (props) => (
  <tr>
    <td><span>city: {props.city.name} </span></td>
    <td><span>temp: {(props.city.main.temp - 273.15).toFixed(2)}</span></td>
    <td><WeatherList weather={props.city.weather} /></td>
  </tr>
);
