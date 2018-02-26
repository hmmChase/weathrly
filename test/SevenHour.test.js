import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';

const cleanApiData = {
  seven: [
    { hour: "6:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "37" },
    { hour: "7:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "34" },
    { hour: "8:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "30" },
    { hour: "9:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "26" },
    { hour: "10:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "25" },
    { hour: "11:00 PM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "24" },
    { hour: "12:00 AM", icon: "http://icons.wxug.com/i/c/k/nt_clear.gif", tempF: "23" }
  ]
};

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a title with a class of seven-title', () => {
    expect(wrapper.find('.seven-title').length).toEqual(1);
  });

  it('should have a wrapper div with a class of seven-card', () => {
    expect(wrapper.find('.seven-card').length).toEqual(1);
  });

  it('should create 7 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  });


});