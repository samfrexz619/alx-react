/** @jest-environment jsdom */
import React from 'react';
import { shallow } from 'enzyme'
import Header from './Header'
import logo from '../assets/holberton-logo.jpg'
import { StyleSheetTestUtils } from "aphrodite";



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Header  />', () => {
  it('should render Header component without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render img tag', () => {
    const wrapper = shallow(<Header  />)
    const imgTag = wrapper.find('img')
    expect(imgTag.exists()).toBe(true)
    expect(imgTag.prop('src')).toBe(logo);
    expect(imgTag.prop('alt')).toBe('logo');
    // expect(imgTag.prop('className')).toBe('image-class');
  })

  it('should render h1 text', ()=> {
    const wrapper = shallow(<Header />)
    expect(wrapper.find("h1").text()).toEqual('School dashboard')
  })
})