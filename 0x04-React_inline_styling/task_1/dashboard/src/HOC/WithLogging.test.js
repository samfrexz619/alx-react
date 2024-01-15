/** @jest-environment jsdom */
import React from 'react'
import { mount } from 'enzyme'
import WithLogging from './WithLogging'


const TestComponent = () => <p>Test Components</p>;

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log a message when the component is mounted', () => {
    const WrappedComponent = WithLogging({ WrappedComponent: TestComponent });

    mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is mounted');
  });

  it('should log a message when the component is going to unmount', () => {
    const WrappedComponent = WithLogging({ WrappedComponent: TestComponent });

    const wrapper = mount(<WrappedComponent />);
    
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component TestComponent is going to unmount');
  });

  // it('should set the correct display name for the HOC', () => {
  //   const WrappedComponent = WithLogging({ WrappedComponent: TestComponent });
  //   expect(WrappedComponent.displayName).toBe('WithLogging(TestComponent)');
  // });
});

// describe("WithLogging tests", () => {
//   it("should call console.log on mount and dismount", () => {
//     const spy = jest.spyOn(console, "log").mockImplementation();
//     const NewComponent = WithLogging(TestComponent);
//     const wrapper = shallow(<NewComponent />);

//     expect(spy).toBeCalledTimes(1);
//     wrapper.unmount();
//     expect(spy).toBeCalledTimes(2);
//     spy.mockRestore();
//   });

//   it("should log out the right message on mount and on unmount", () => {
//     const spy = jest.spyOn(console, "log").mockImplementation();
//     const NewComponent = WithLogging(TestComponent);
//     const wrapper = shallow(<NewComponent />);

//     expect(spy).toBeCalledTimes(1);
//     expect(spy).toBeCalledWith("Component TestComponent is mounted");
//     wrapper.unmount();
//     expect(spy).toHaveBeenCalledTimes(2);
//     expect(spy).toBeCalledWith("Component Test is going to unmount");
//     spy.mockRestore();
//   });
// });