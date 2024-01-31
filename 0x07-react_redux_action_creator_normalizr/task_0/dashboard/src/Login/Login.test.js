/** @jest-environment jsdom */
import React from "react";
import { shallow, mount } from 'enzyme'
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";



describe('<Login  />', () => {

  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Login />);
  });

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

  it('submit button should be disabled by default', () => {
    const wrapper = shallow(<Login  />)
    const submit = wrapper.find("input[type='submit']")
    expect(submit.props().disabled).toBe(true) 
  })

  // it("after changing the value of the two inputs, button is enabled", () => {

  //   wrapper.find("#email").simulate('change', {currentTarget: {value: 'frexz@gmail.com'}});
  //   wrapper.find("#psswd").simulate('change', {currentTarget: {value: 'random'}});
  //   wrapper.update()
  //   expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  //   // expect(wrapper.find('form').props().disabled).toBe(false); 

  // });
})