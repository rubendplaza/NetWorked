import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { shallow, mount } from "enzyme";

let wrapper;
beforeEach(() => {
  const SomeComponent = () => null;
  wrapper = mount(
    <ErrorBoundary>
      <SomeComponent id="foo" />
    </ErrorBoundary>
  );
});

describe("ErrorBoundary Component", () => {
  test("expect to render ErrorBoundary component", () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });

  test("testing componentDidCatch should display error message if wrapped component throws", () => {
    const error = new Error("test");
    wrapper.find("#foo").simulateError(error);
    expect(wrapper.state()).toEqual({ hasError: true });
  });

  test("testing componentDidCatch should NOT display error message if wrapped component does not throw", () => {
    expect(wrapper.state()).toEqual({ hasError: false });
  });
});
