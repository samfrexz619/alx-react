/** @jest-environment jsdom */
import React from 'react';
import { shallow, mount } from 'enzyme'
import Header from './Header'
// import logo from '../assets/holberton-logo.jpg'
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";



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

  // it('should render img tag', () => {
  //   const wrapper = shallow(<Header  />)
  //   const imgTag = wrapper.find('img')
  //   expect(imgTag.exists()).toBe(true)
  //   expect(imgTag.prop('src')).toBe(logo);
  //   expect(imgTag.prop('alt')).toBe('logo');
  // })

  it('should render h1 text', ()=> {
    const wrapper = shallow(<Header />)
    expect(wrapper.find("h1").text()).toEqual('School dashboard')
  })

  it(`Tests that logoutSection is not rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it(`Tests that logoutSection is rendered with context values`, () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });
})