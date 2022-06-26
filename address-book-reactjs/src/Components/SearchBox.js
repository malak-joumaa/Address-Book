import React from "react";
const SearchBox = ({ handleSearch }) => {
  return (
    <>
      <label>Search:</label>
      <input type="text" onChange={(event) => handleSearch(event)} />
    </>
  );
};

export default SearchBox;
