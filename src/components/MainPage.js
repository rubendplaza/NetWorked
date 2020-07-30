import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Header from "./Header";
import "./MainPage.css";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestConnections();
  }

  filterConnections = () => {
    const { searchField } = this.props;
    return this.props.connections.filter((connection) => {
      return (
        connection.name.first
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        connection.name.last.toLowerCase().includes(searchField.toLowerCase())
      );
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;
    return isPending ? (
      <div className="loadingContainer">
        <h1 className="loadingTag">Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList connections={this.filterConnections()} />
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
