import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
})