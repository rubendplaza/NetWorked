import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CONNECTIONS_PENDING,
  REQUEST_CONNECTIONS_SUCCESS,
  REQUEST_CONNECTIONS_FAILED,
} from "./constants.js";

import * as reducers from "./reducers";

describe("searchConnections", () => {
  const initialStateSearch = {
    searchField: "",
  };
  test("should return the initial state", () => {
    expect(reducers.searchConnections(undefined, {})).toEqual({
      searchField: "",
    });
  });

  test("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchConnections(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestConnections", () => {
  const initialStateConnections = {
    connections: [],
    error: "",
    isPending: false,
  };

  test("should return the initial state", () => {
    expect(reducers.requestConnections(undefined, {})).toEqual(
      initialStateConnections
    );
  });

  test("should handle REQUEST_CONNECTIONS_PENDING action", () => {
    expect(
      reducers.requestConnections(initialStateConnections, {
        type: REQUEST_CONNECTIONS_PENDING,
      })
    ).toEqual({
      connections: [],
      isPending: true,
      error: "",
    });
  });

  test("should handle REQUEST_CONNECTIONS_SUCCESS action", () => {
    expect(
      reducers.requestConnections(initialStateConnections, {
        type: REQUEST_CONNECTIONS_SUCCESS,
        payload: [
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
        ],
      })
    ).toEqual({
      connections: [
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
      ],
      isPending: false,
      error: "",
    });
  });

  test("should handle REQUEST_CONNECTIONS_FAILED action", () => {
    expect(
      reducers.requestConnections(initialStateConnections, {
        type: REQUEST_CONNECTIONS_FAILED,
        payload: "Error Occurred",
      })
    ).toEqual({
      connections: [],
      isPending: false,
      error: "Error Occurred",
    });
  });
});
