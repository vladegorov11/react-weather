import {FETCH_WEATHER} from '../actions/ActionTypes'

export default function weatherStore(state = [], action) {
  switch(action.type) {
		case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}
