/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App.js'
import Login from '../Login/Login.js'
import CourseList from '../CourseList/CourseList.js'


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

  it('should not render Courselist', () => {
    const wrapper = shallow(<App />)
    // wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.contains(<CourseList  />)).toBe(false)
    expect(wrapper.exists()).toBe(true)
  })

  it('should not render Courselist', () => {
    const wrapper = shallow(<App />)
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.contains(<CourseList listCourses={listCourses} />)).toBe(true)
    expect(wrapper.contains(<Login  />)).toBe(false)
  })
  // it('should render Notification comp', () => {
  //   const wrapper = shallow(<App  />)
  //   const notif = wrapper.find(Notifications)
  //   expect(notif.exists()).toBe(true)
  // })
  
  // it('should render Header comp', () => {
  //   const wrapper = shallow(<App  />)
  //   const notif = wrapper.find(Header)
  //   expect(notif.exists()).toBe(true)
  // })

  // it('should render Login comp', () => {
  //   const wrapper = shallow(<App  />)
  //   const notif = wrapper.find(Login)
  //   expect(notif.exists()).toBe(true)
  // })

  // it('should render Footer comp', () => {
  //   const wrapper = shallow(<App  />)
  //   const notif = wrapper.find(Footer)
  //   expect(notif.exists()).toBe(true)
  // })
})