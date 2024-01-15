/** @jest-environment jsdom */
import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer'
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Footer  />', ()=> {
  it('should render Footer component without crashing', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render text', () => {
    const wrapper = shallow(<Footer  />)
   expect(wrapper.find("p").text()).toContain('Copyright')
  })
})