import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Search', () => {
  let wrapper;

  let props = {
    setLocation: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Search props={props} />);
  });

  it('should exist', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it('should have a wrapper with a class of search', () => {
    expect(wrapper.find('.search').length).toEqual(1);
  });

  it('should render an input element with a class of search-bar', () => {
    expect(wrapper.find('.search-bar').length).toEqual(1);
  });

  it('should render a datalist element with an ID of suggestions', () => {
    expect(wrapper.find('#suggestions').length).toEqual(1);
  });

  it('should have a default state of userInput equal to an empty string', () => {
    expect(wrapper.state().userInput).toEqual('');
  });

  it('should have a default state of suggestions equal to an empty array', () => {
    expect(wrapper.state().suggestions).toEqual([]);
  });

  it('should update userInput state when user types in search-bar', () => {
    expect(wrapper.state().userInput).toEqual('');
    wrapper.find('.search-bar').simulate('change', { target: { value: 'Las' } });
    expect(wrapper.state().userInput).toEqual('Las');
  });

  it('should update suggestions state array when user types in search-bar', () => {
    expect(wrapper.state().suggestions).toEqual([]);
    wrapper.find('.search-bar').simulate('change', { target: { value: 'Las' } });
    expect(wrapper.state().suggestions).toEqual(['Las Vegas, NV', 'Las Cruces, NM']);
  });

  it('should update datalist with suggested locations', () => {
    expect(wrapper.find('option').length).toEqual(0);
    wrapper.find('.search-bar').simulate('change', { target: { value: 'Las' } });
    expect(wrapper.find('option').length).toEqual(2);
  });

  it('should run handleClick on click of the submit button', () => {
    wrapper = mount(<Search setLocation={props.setLocation} />);
    wrapper.find('.search-button').simulate('click');
    expect(wrapper.props().setLocation).toHaveBeenCalledTimes(1);
  });

  it('should set userInput state to an empty string on click of the submit button', () => {
    wrapper = mount(<Search setLocation={props.setLocation} />);
    wrapper.setState({ userInput: 'Denver, CO' });
    wrapper.find('.search-button').simulate('click');
    expect(wrapper.state().userInput).toEqual('');
  });

});
