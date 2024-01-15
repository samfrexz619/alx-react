/** @jest-environment jsdom */
import React from "react";
import { shallow } from 'enzyme'
import Login from "./Login";



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Login  />', () => {
  it('should render Login component without crashing', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should input', () => {
    const wrapper = shallow(<Login  />)
    const inpElem = wrapper.find('#mail')
    expect(inpElem.exists()).toBe(true)
  })
  
  it('should render the second input', () => {
    const wrapper = shallow(<Login  />)
    const inpElem = wrapper.find('#psswd')
    expect(inpElem.exists()).toBe(true) 
  })
})