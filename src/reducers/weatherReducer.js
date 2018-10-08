import {FETCH_WEATHER, ERROR} from '../actions/ActionTypes'

export default function weatherStore(state = [], action) {
  switch(action.type) {
		case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    case ERROR:
      return state;
    default:
      return state;
  }
}
