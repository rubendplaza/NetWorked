import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="ma4 search">
      <input
        aria-label="Search Network Connections"
        id="search"
        className="bw2 pa3 ba"
        type="search"
        placeholder="Search Network"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
