import { FETCH_WEATHER, ERROR } from './ActionTypes'
import axios from 'axios'
const APPID = 'bffebbbffac134d4523719fc5f232033'
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=`


export function fetchWeather(city) {
  const response = axios.get(URL + city)
  console.log(response);
  if (response.status === '404') {
    return {
      type: ERROR,
      payload: ''
    }
  }else {
    return {
      type: FETCH_WEATHER,
      payload: response
    }
  }
}
