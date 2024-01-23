/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'


describe('<BodySectionWithMarginBottom  />', () => {
  // it('should render comp correctly', () => {
  //   const wrapper = shallow(<BodySectionWithMarginBottom />)

  // })
  
  it('should render props correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title' />)
    
    const bodySection = wrapper.find(BodySection)
    expect(wrapper.find(BodySection).exists()).toBe(true)
    expect(bodySection.html()).toEqual('<div class="bodySection"><h2>test title</h2></div>')
  })
})
// *785# 35416351312