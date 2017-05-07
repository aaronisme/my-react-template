import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

describe('test', () => {
  it('should return test', () => {
    const warpper = shallow(<App />);
    expect(warpper.find('.test').length).toEqual(1);
  })
})
