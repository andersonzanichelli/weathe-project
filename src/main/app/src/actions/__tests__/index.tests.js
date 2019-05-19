import { saveCity } from 'actions';
import { SAVE_CITY } from 'actions/types';

describe('saveCity', () => {
  it('has the correct type', () => {
    const action = saveCity();

    expect(action.type).toEqual(SAVE_CITY);
  });
});
