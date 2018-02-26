import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

describe('Hourly Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Card key={1} time={'8:00'} icon={'img.png'} temp={'33'}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a wrapper with a class of card', () => {
    expect(wrapper.find('div').hasClass('card')).toEqual(true);
  });

  it('should render an h1 tag with the time', () => {
    expect(wrapper.find('h1').text()).toEqual('8:00');
  });

   it('should render a img tag with a src', () => {
    expect(wrapper.find('img').prop('src')).toEqual('img.png');
  });

   it('should render a p tag with the temp', () => {
    expect(wrapper.find('p').text()).toEqual('33');
  });
});

describe('Ten day Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Card key={1} day={'Tuesday'} icon={'img.png'} high={'75'} low={'35'}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a wrapper with a class of card', () => {
    expect(wrapper.find('div').hasClass('card')).toEqual(true);
  });

  it('should render an h1 tag with the time', () => {
    expect(wrapper.find('h1').text()).toEqual('Tuesday');
  });

   it('should render a img tag with a src', () => {
    expect(wrapper.find('img').prop('src')).toEqual('img.png');
  });

   it('should render a p tag with the high', () => {
    expect(wrapper.find('p').text()).toEqual('75');
  });

   it('should render a span tag with the low', () => {
    expect(wrapper.find('span').text()).toEqual('35');
  });
});
