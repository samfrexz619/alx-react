/** @jest-environment jsdom */
import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App.js'
import Login from '../Login/Login.js'
import CourseList from '../CourseList/CourseList.js'
import Notifications from '../Notifications/Notifications.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { StyleSheetTestUtils } from "aphrodite";



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<App  />', () => {

  const listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: '60'
    },
    {
      id: 2,
      name: 'Webpack',
      credit: '20'
    },
    {
      id: 3,
      name: 'React',
      credit: '40'
    },
  ]

  it('should not render App without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBeDefined()
  })

  it('should not render Courselist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<CourseList  />)).toBe(false)
  })

  it('should render CourseList', () => {
    const wrapper = shallow(<App />)
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<CourseList listCourses={listCourses} />)).toBe(true)
  })

  it('should not render Courselist', () => {
    const wrapper = shallow(<App />)
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<Login  />)).toBe(false)
  })

  it('should render Notification comp', () => {
    const wrapper = shallow(<App  />)
    const notif = wrapper.find(Notifications)
    expect(notif.exists()).toBe(true)
  })
  
  it('should render Header comp', () => {
    const wrapper = shallow(<App  />)
    const notif = wrapper.find(Header)
    expect(notif.exists()).toBe(true)
  })

  it('should render Login comp', () => {
    const wrapper = shallow(<App  />)
    const login = wrapper.find(Login)
    expect(login.exists()).toBe(true)
  })

  it('should render Footer comp', () => {
    const wrapper = shallow(<App />)
    const notif = wrapper.find(Footer)
    expect(notif.exists()).toBe(true)
  })
})

describe('check logout fuction', () => {
  it('check that alert is called when ctrl & h keys are keydown', () => {
    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    const wrapper = mount(<App  />)
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h'})
    window.dispatchEvent(event)
    wrapper.instance().showLogoutAlert()
    expect(spy).toHaveBeenCalledWith("Logging you out");
    // jest.restoreAllMocks();
    spy.mockRestore()
    wrapper.unmount();
  })

  it("calls logOut function", () => {
    const logOutMock = jest.fn();
    const wrapper = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1); 
    wrapper.unmount();
  });
})

describe('testing App state', () => {
  it('displayDrawer state should be false', () => {
    const wrapper = shallow(<App  />)
    expect(wrapper.state().displayDrawer).toBe(false)
  })

  it('should set displayDrawer to true', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toBe(true);
	});

  it('should set displayDrawer to false', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state().displayDrawer).toBe(false);
	});
})