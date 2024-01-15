/** @jest-environment jsdom */
import React from 'react'
import { shallow, mount } from 'enzyme'
import NotificationItem from './NotificationItem'
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

describe('check for simulation', () => {
  it('pass a spy as the markAsRead property', () => {
    const markSpy = jest.fn()
    const wrapper = mount(<NotificationItem  />)
    wrapper.setProps({ value: "test item", markAsRead: markSpy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(markSpy).toBeCalledTimes(1);
    expect(markSpy).toBeCalledWith(1);
    markSpy.mockRestore();
  })
})