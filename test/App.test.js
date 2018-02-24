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

  it('Should render the Search and CurrentWeather components', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('Should render the Welcome component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should initially have set states of null for cleanApiData, a set location, and no apiData error', () => {
    expect(wrapper.state()).toEqual(
      { cleanApiData: null, 
        location: localStorage.location, 
        apiDataError: false });
  });

  // it('should set the state of our location', () => {
  //   wrapper.instance().setLocation('denver')
  //   expect(wrapper.state('location')).toEqual( 'denver' );
  // });
});

