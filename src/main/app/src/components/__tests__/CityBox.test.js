import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CityBox from 'components/CityBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CityBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has two input boxes and a button', () => {
  expect(wrapped.find('input').length).toEqual(2);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the city input', () => {
  beforeEach(() => {
    wrapped.find('.name').simulate('change', { target: { value: 'Maringá' } });
    wrapped.find('.country').simulate('change', { target: { value: 'br' } });
    wrapped.update();
  });

  it('has a input for city that user can type in', () => {
    expect(wrapped.find('.name').prop('value')).toEqual('Maringá');
    expect(wrapped.find('.country').prop('value')).toEqual('br');
  });

  it('when submit the city input gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('.name').prop('value')).toEqual('');
    expect(wrapped.find('.country').prop('value')).toEqual('');
  });
});
