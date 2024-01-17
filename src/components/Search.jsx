import React from "react";

function Search() {
  return (
    <div className="search">
      <form action="">
        <div className="input_wrapper">
          <input
            className="search_input"
            type="text"
            id="category"
            placeholder="Category"
          />
          <input
            className="search_input"
            type="text"
            id="location"
            placeholder="Location"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
