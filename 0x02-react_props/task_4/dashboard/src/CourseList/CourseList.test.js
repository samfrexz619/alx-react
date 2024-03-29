/** @jest-environment jsdom */
import React from 'react';
import { shallow } from 'enzyme'
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


describe('<CorseList  />', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList  />)
    expect(wrapper.exists()).toBe(true)
  })

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList />);

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