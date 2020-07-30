import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

test("SearchBox component renders correctly without crashing", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
