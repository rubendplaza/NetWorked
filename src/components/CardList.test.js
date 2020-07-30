import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

test("expect to render card component", () => {
  const connections = [
    {
      index: 1,
      name: {
        first: "Ruben",
        last: "Plaza",
      },
      email: "ruben@gmail.com",
      phone: 1234567890,
      company: "Google",
    },
    {
      index: 2,
      name: {
        first: "Rube",
        last: "Plaz",
      },
      email: "rube@gmail.com",
      phone: 1234567899,
      company: "Facebook",
    },
  ];
  expect(shallow(<CardList connections={connections} />)).toMatchSnapshot();
});
