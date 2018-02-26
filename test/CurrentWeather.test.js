import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

const cleanApiData = {
  curr: {
    location: 'denver, co',
    conditions: 'cloudy',
    temp: '39',
    high: '42',
    low: '23',
    day: 'tuesday',
    month: 'may',
    date: '24',
    summary: 'Plentiful sunshine. High 42.',
    icon: 'img.png'
  }
};

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<CurrentWeather cleanApiData={cleanApiData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a wrapper with a class of today', () => {
    expect(wrapper.find('.today').length).toEqual(1);
  });

  it('should have a wrapper with a class current weather', () => {
    expect(wrapper.find('.current-weather').length).toEqual(1);
  });

  it('should have an h2 element with a class of current location', () => {
    expect(wrapper.find('.current-location').text()).toEqual('denver, co');
  });

  it('should have an h3 element with a class of current day', () => {
    expect(wrapper.find('.current-day').text()).toEqual('tuesday, may, 24');
  });

  it('should have an img element with a class of weather icon', () => {
    expect(wrapper.find('.weather-icon').text()).toEqual('');
  });

  it('should have an h3 element with a class of current temp', () => {
    expect(wrapper.find('.current-temp').text()).toEqual('39˚');
  });

  it('should have an h3 element with a class of conditions', () => {
    expect(wrapper.find('.conditions').text()).toEqual('Currently: cloudy');
  });

  it('should have an div wrapper with a class of todays weather', () => {
    expect(wrapper.find('.todays-weather').length).toEqual(1);
  });

  it('should have an h2 element with a class of today title', () => {
    expect(wrapper.find('.today-title').text()).toEqual('Today\'s Weather');
  });

  it('should have an h2 element with a class of todays temp', () => {
    expect(wrapper.find('.todays-temp').text()).toEqual('42˚ ');
  });

  it('should have an h2 element with a class of todays low', () => {
    expect(wrapper.find('.todays-low').text()).toEqual('/ 23˚');
  });

  it('should have an h3 element with a class of summary', () => {
    expect(wrapper.find('.summary').text()).toEqual('Plentiful sunshine. High 42.');
  });
})