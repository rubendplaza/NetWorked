import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import "./App.css";

import { setSearchField, requestConnections } from "../actions";

//tell me what piece of state I need to listen to and send down as props
const mapStateToProps = (state) => {
  return {
    //these fields come from the reducers
    searchField: state.searchConnections.searchField,
    connections: state.requestConnections.connections,
    isPending: state.requestConnections.isPending,
    error: state.requestConnections.error,
  };
};

//dispatch triggers the action
//what props should I listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestConnections: () => dispatch(requestConnections()),
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestConnections();
  }

  render() {
    const { searchField, onSearchChange, connections, isPending } = this.props;
    const filteredConnections = connections.filter((connection) => {
      return (
        connection.name.first
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        connection.name.last.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return isPending ? (
      <div className="loadingContainer">
        <h1 className="loadingTag">Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList connections={filteredConnections} />
        </Scroll>
      </div>
    );
  }
}

//connect is a higher order function that returns another function that will be passed App
export default connect(mapStateToProps, mapDispatchToProps)(App);
