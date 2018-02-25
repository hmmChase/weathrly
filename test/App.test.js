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
    expect(wrapper).toBeDefined();
  });

  it('Should initially have set states of null for cleanApiData, a set location, and no apiData error', () => {
    expect(wrapper.state()).toEqual(
      {
        cleanApiData: null,
        location: localStorage.location,
        apiDataError: false
      });
  });

  // IF THERE IS AN ERROR
  it('Should render the Search components if there is an error', () => {
    wrapper.setState({ apiDataError: true });
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the CurrentWeather, SevenHour, and TenDay components if there is an error and there is cleanApiData', () => {
    wrapper.setState({ apiDataError: true });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });

  // IF THERE IS NO LOCATION
  it('Should render the Search components if there is no location', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the Welcome component if there is no location', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  // IF THERE IS A LOCATION
  it('Should render the Welcome component if there is no location', () => {
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });


});