import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toBeDefined();
  });
});

