/** @jest-environment jsdom */
import React from 'react';
import { shallow } from 'enzyme'
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<CorseList  />', () => {
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

  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList  />) 
    expect(wrapper.exists()).toBe(true)
  })

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  })
})