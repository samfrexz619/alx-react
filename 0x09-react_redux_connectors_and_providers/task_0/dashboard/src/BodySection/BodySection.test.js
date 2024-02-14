/** @jest-environment jsdom */
import React from 'react'
import { shallow } from 'enzyme'
import BodySection from './BodySection'
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySection />', () => {
  
  it('should render the comp', ()=> {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    )
    expect(wrapper.exists('h2')).toBe(true)
    expect(wrapper.containsMatchingElement(<h2 class='title_prcf3v'>test title</h2>))
    // expect(wrapper.find('h2').html()).toEqual('<h2>test title</h2>')
  })

  it('should render the comp', ()=> {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    )
    const para = wrapper.find('p')
    expect(para.text()).toBe('test children node')
  })
})