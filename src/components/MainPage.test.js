import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestConnections: jest.fn(),
    connections: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});
describe("tests for MainPage component", () => {
  test("renders MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders MainPage loading screen without crashing", () => {
    const mockProps1 = {
      onRequestConnections: jest.fn(),
      connections: [
        {
          index: 1,
          name: {
            first: "John",
            last: "Plaza",
          },
          email: "ruben@gmail.com",
          phone: 1234567890,
          company: "Google",
        },
      ],
      searchField: "",
      isPending: true,
    };

    const wrapper1 = shallow(<MainPage {...mockProps1} />);
    expect(wrapper1).toMatchSnapshot();
  });

  test("filters robots correctly", () => {
    const mockProps2 = {
      onRequestConnections: jest.fn(),
      connections: [
        {
          index: 1,
          name: {
            first: "John",
            last: "Plaza",
          },
          email: "ruben@gmail.com",
          phone: 1234567890,
          company: "Google",
        },
        {
          index: 2,
          name: {
            first: "Amy",
            last: "Plaza",
          },
          email: "rube@gmail.com",
          phone: 1234567899,
          company: "Facebook",
        },
      ],
      searchField: "amy",
      isPending: false,
    };
    expect(wrapper.instance().filterConnections()).toEqual([]);

    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterConnections()[0].name.first).toEqual(
      "Amy"
    );
  });

  test("filters robots correctly 2", () => {
    const mockProps3 = {
      onRequestConnections: jest.fn(),
      connections: [
        {
          index: 1,
          name: {
            first: "John",
            last: "Plaza",
          },
          email: "ruben@gmail.com",
          phone: 1234567890,
          company: "Google",
        },
      ],
      searchField: "amy",
      isPending: false,
    };

    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterConnections()).toEqual([]);
  });
});
