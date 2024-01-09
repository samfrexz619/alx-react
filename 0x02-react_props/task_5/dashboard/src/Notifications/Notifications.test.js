/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications.js'
import NotificationItem from './NotificationItem.js'


describe('Notification component', ()=> {
  it('should render Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render list of items', ()=> {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const item = wrapper.find(NotificationItem)
    expect(item.exists()).toBe(true)
  })

  it('should render the first item', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const firstElem = wrapper.find(NotificationItem).first()
    expect(firstElem.html()).toBe(`<li data-notification-type="default" data-priority="default">New course available</li>`)
  })

  it('should render menuItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const item = wrapper.find('.menuItem')
    expect(item.exists()).toBe(true)
  })

  it('should render menuItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const item = wrapper.find('.Notifications')
    expect(item.exists()).toBe(true)
  })
  // it('should render div with p text', ()=> {
  //   const wrapper = shallow(<Notifications />)
  //   expect(wrapper.find("p").text()).toContain('Here is the list of notifications') 
  // })

})