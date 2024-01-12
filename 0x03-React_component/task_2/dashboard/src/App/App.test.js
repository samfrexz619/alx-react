/** @jest-environment jsdom */
import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App.js'
import Login from '../Login/Login.js'
import CourseList from '../CourseList/CourseList.js'
import Notifications from '../Notifications/Notifications.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'


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
    const wrapper = shallow(<App  />)
    const notif = wrapper.find(Footer)
    expect(notif.exists()).toBe(true)
  })
})

describe('check logout fuction', () => {
  it('check that alert is called when ctrl & h keys are keydown', () => {
    const spy = jest.spyOn(window, 'alert')
    const wrapper = mount(<App  />)
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h'})
    window.dispatchEvent(event)
    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  })

  it("calls logOut function", () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    window.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
})