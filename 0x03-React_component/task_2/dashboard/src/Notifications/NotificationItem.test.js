/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem'


describe('<NotificationItem  />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render text and value correctly', () => {
    const wrapper = shallow(<NotificationItem />)
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default" data-priority="default">test</li>');
  })

  it('should render html', () => {
    const html = {
      __html: "<u>test</u>"
    }
    const wrapper = shallow(<NotificationItem html={html} />)
    const liElement = wrapper.find('li')
    expect(liElement.prop('dangerouslySetInnerHTML')).toEqual({
      __html: html})
  })
})