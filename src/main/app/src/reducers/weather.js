import { FETCH_WEATHER } from '../actions/types';

export default function(state = [], action) {

  switch (action.type) {

    case FETCH_WEATHER:
      console.log(action.payload.data)
      return [ action.payload.data, ...state ];

    default:
      return state;
  }
}
