import {combineReducers} from 'redux';
import WeatherReducer from './weatherReducer';

const allReducers = combineReducers({
	weather:  WeatherReducer
});

export default allReducers
