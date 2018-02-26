import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a wrapper with a class of welcome', () => {
    expect(wrapper.find('div').hasClass('welcome')).toEqual(true);
  });

  it('should render an h1 tag with a welcome title', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome to Weathrly');
  });

  it('should update suggestions array based on userInput state', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome to Weathrly');
  });

});
