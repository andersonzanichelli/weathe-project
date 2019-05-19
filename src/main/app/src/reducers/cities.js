import { SAVE_CITY, FETCH_CITIES } from '../actions/types';

export default function(state = [], action) {

  switch (action.type) {
    case SAVE_CITY:
    const city = action.payload.data
    return [ ...state, city ];

    case FETCH_CITIES:
      const cities = action.payload.data._embedded.data.map(city => { return { id: city.id, name: city.name, country: city.country } })
      return [ ...state, ...cities ];

    default:
      return state;
  }
}
