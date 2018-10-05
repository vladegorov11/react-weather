import { FETCH_WEATHER } from './ActionTypes'
import axios from 'axios'
const APPID = 'bffebbbffac134d4523719fc5f232033'
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=`


export function fetchWeather(city) {
  const response = axios.get(URL + city)
  return {
    type: FETCH_WEATHER,
    payload: response
  }
}
