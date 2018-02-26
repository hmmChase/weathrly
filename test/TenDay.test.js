import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';

const cleanApiData = {
  ten: [
    { day: "Sunday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "48", low: "21" },
    { day: "Monday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "48", low: "20" },
    { day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "45", low: "22" },
    { day: "Wednesday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "44", low: "19" },
    { day: "Thursday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", high: "50", low: "28" },
    { day: "Friday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "57", low: "32" },
    { day: "Saturday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "57", low: "27" },
    { day: "Sunday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "46", low: "25" },
    { day: "Monday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "47", low: "27" },
    { day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", high: "51", low: "28" }
  ]
};

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a title with a class of ten-title', () => {
    expect(wrapper.find('.ten-title').length).toEqual(1);
  });

  it('should have a wrapper div with a class of ten-card', () => {
    expect(wrapper.find('.ten-card').length).toEqual(1);
  });

  it('should create 7 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  });


});