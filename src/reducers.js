import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CONNECTIONS_PENDING,
  REQUEST_CONNECTIONS_SUCCESS,
  REQUEST_CONNECTIONS_FAILED,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

export const searchConnections = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateConnections = {
  isPending: false,
  connections: [],
  error: "",
};

export const requestConnections = (
  state = initialStateConnections,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_CONNECTIONS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_CONNECTIONS_SUCCESS:
      return Object.assign({}, state, {
        connections: action.payload,
        isPending: false,
      });
    case REQUEST_CONNECTIONS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
