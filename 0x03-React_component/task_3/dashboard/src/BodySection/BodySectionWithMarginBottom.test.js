/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'


describe('<BodySectionWithMarginBottom  />', () => {
  it('should render comp correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />)

    expect(wrapper.find(BodySection).exists()).toBe(true)
  })

  it('should render props correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title' />)

    const bodySection = wrapper.find(BodySection)
    expect(bodySection.html()).toEqual('<div class="bodySection"><h2>test title</h2></div>')
  })
})