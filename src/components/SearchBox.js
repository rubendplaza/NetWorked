import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="ma4 search">
      <input
        id="search"
        className="bw2 pa3 ba"
        type="search"
        placeholder="Search Network"
        onChange={searchChange}
      />
      <label for="search">Search Network</label>
    </div>
  );
};

export default SearchBox;
