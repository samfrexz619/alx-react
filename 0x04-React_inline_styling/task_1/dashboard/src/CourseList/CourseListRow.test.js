/** @jest-environment jsdom */
import React from 'react';
import { shallow } from 'enzyme'
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CourseList', () => {
  it('should render one cell with colspan=2', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />)
    const colSpan = wrapper.find('th')

    expect(colSpan.prop('colSpan')).toBe(2)
  })

  it('should render two cells', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={'20'} />)
    const colSpan = wrapper.find('th')

    expect(colSpan.length).toBe(2);
  })

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />)

    const trElement = wrapper.find('tr')

    expect(trElement.exists()).toBe(true)

    expect(trElement.children()).toHaveLength(2)

    expect(trElement.childAt(0).html()).toEqual("<td> test </td>")

    expect(trElement.childAt(1).html()).toEqual("<td> test </td>")
  })
})