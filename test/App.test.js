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

  // Default states
  it('Should initially have default states of null for cleanApiData, location, and no apiData error', () => {
    expect(wrapper.state()).toEqual(
      {
        cleanApiData: null,
        location: localStorage.location,
        apiDataError: false
      });
  });

  // Rendering - If there is an error
  it('Should render the Search component if there is an error', () => {
    wrapper.setState({ apiDataError: true });
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the error message if there is an error', () => {
    wrapper.setState({ apiDataError: true });
    expect(wrapper.find('p').text()).toEqual('Please enter a City and State or zipcode (ex. Denver, CO)');
  });

  it('Should render the CurrentWeather, SevenHour, and TenDay components if there is an error and there is cleanApiData', () => {
    wrapper.setState({ apiDataError: true });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });

  // Rendering - If there is no location set in storage
  it('Should render the Welcome component if there is no location', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should render the Search component if there is no location', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should not render the CurrentWeather, SevenHour, and TenDay components if there is no location', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('SevenHour').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(0);
  });

  // Rendering - If there is a location set in state
  it('Should not render the Welcome component if there is a location that returned API data', () => {
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('Welcome').length).toEqual(0);
  });

  it('Should render the Search component if there is a location that returned API data', () => {
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the CurrentWeather, SevenHour, and TenDay components if there is a location that returned API data', () => {
    wrapper.setState({ location: 'Denver, CO' });
    wrapper.setState({ cleanApiData: true });

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });

  it.skip('Should initially retrieve location from localStorage if available', () => {
    localStorage.setItem('location', '45505');
    console.log(localStorage);
    console.log(localStorage.getItem('location'));
    console.log(wrapper.state());
    wrapper = mount(<App />);
    console.log(localStorage);
    console.log(wrapper.state());
  });



  // Does your component render?
    // done
  // Are props being passed and accepted correctly?
  // Does the component manipulate state?
  // Are the correct functions being called?


});


  // console.log(wrapper.debug());