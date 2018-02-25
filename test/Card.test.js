import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    // console.log(wrapper.debug());
    expect(wrapper).toBeDefined();
  });

});
