/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import App from './App.js'
import Notifications from '../Notifications/Notifications.js'
import Header from '../Header/Header.js'
import Login from '../Login/Login.js'
import Footer from '../Footer/Footer.js'


describe('<App  />', () => {
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
    const notif = wrapper.find(Login)
    expect(notif.exists()).toBe(true)
  })

  it('should render Footer comp', () => {
    const wrapper = shallow(<App  />)
    const notif = wrapper.find(Footer)
    expect(notif.exists()).toBe(true)
  })
})