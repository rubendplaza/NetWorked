import React from "react";
import Scroll from "./Scroll";
import { shallow } from "enzyme";

test("Scroll component renders correctly without crashing", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
