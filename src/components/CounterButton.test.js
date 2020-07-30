import React from "react";
import CounterButton from "./CounterButton";
import { shallow } from "enzyme";

describe("CounterButton Component", () => {
  test("expect to render CounterButton component", () => {
    const mockColor = "red";
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  test("correctly increments the counter", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);
    //find in enzyme is like using a query selector
    wrapper.find("button.ctr-button").simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
  });

  test("correctly passes color props down", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper.props().color).toEqual("red");
  });

  test("testing componentShouldUpdate: true case", () => {
    const mockColor = "red";
    const mockProps = { color: "red" };
    const mockState = { count: 1 };
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate(mockProps, mockState);
    expect(shouldUpdate).toBe(true);
  });

  test("testing componentShouldUpdate: false case", () => {
    const mockColor = "red";
    const mockProps = { color: "red" };
    const mockState = { count: 0 };
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate(mockProps, mockState);
    expect(shouldUpdate).toBe(false);
  });
});
