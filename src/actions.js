import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_CONNECTIONS_PENDING,
    REQUEST_CONNECTIONS_SUCCESS,
    REQUEST_CONNECTIONS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
    //action being taken
    type: CHANGE_SEARCH_FIELD,
    //sending the data to reducer
    payload: text
})

//redux-thunk since we are returning a function and not an object will send us the dispatch allowing us to do this
export const requestConnections = () => (dispatch) => {
    dispatch({ type: REQUEST_CONNECTIONS_PENDING });
    fetch('https://next.json-generator.com/api/json/get/N1hbZK16u')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_CONNECTIONS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_CONNECTIONS_FAILED, payload: err }))
}