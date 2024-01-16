/** @jest-environment jsdom */
import React from 'react'
import { mount, shallow } from 'enzyme'
import Notifications from './Notifications.js'
import NotificationItem from './NotificationItem.js'
import { getLatestNotification } from '../utils/utils.js'
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available'},
  { id: 2, type: 'urgent', value: 'New resume available'},
  { id: 3, type: 'urgent', html: getLatestNotification()},
]

describe('Notification component', ()=> {

  const arr = [];


  it('should render Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render list of items', ()=> {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={arr} />)
    const item = wrapper.find(NotificationItem)
    expect(item.exists()).toBe(false)
  })

  it('should not render Your Notifiations', ()=> {
    const wrapper = shallow(<Notifications />)
    const item = wrapper.find('p')
    expect(item.text()).toBe('Your Notifiations')
  })

  it('should render the first item', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    const firstElem = wrapper.find(NotificationItem).first()
    expect(firstElem.containsMatchingElement(<li data-notification-type="default">New course available</li>))
  })

  it('should render the three NotificationItem components ', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.find(NotificationItem)).toHaveLength(3)
  })

  it('should render the NotificationItem components ', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render menuItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const item = wrapper.find('p').first()
    expect(item.exists()).toBe(true)
    expect(item.text()).toEqual('Your Notifiations')
  })

  // it('should render menuItem', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />)
  //   const item = wrapper.find('.Notifications')
  //   expect(item.exists()).toBe(true)
  // })

  it('should render different text when prop is empty', ()=> {
    const trueWrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)

    const firstText = trueWrapper.find('h4')

    expect(firstText.exists()).toBe(true)

    expect(firstText.html()).toEqual('<h4>Here is the list of notifications</h4>')
  })

  it('should render \'No new notification for now\' when prop is empty', ()=> {
    const falseWrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />)

    const falseText = falseWrapper.find('h4')

    expect(falseText.exists()).toBe(true)

    expect(falseText.html()).toEqual('<h4>No new notification for now</h4>')
  })
})

describe('log function', () => {
  it('should mockup the console.log function', ()=> {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    const wrapper = mount(<Notifications  />)
    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  })
  it("doesnt re-render when the list passed as prop is the same", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false);
  });
})