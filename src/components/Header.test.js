import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe("testing Header component", () => {
  test("Header component renders correctly without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("tests shouldComponentUpdate returning false", () => {
    const mockProps = {};
    const mockState = {};
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate(mockProps, mockState);
    expect(shouldUpdate).toBe(false);
  });
});
