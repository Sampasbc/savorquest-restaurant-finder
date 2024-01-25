import React, { useState } from "react";

function Search() {
  const [categoryInput, setCategoryInput] = useState("");
  const handleCategoryChange = ({ target }) => {
    setCategoryInput(target.value);
  };

  const [locationInput, setLocationInput] = useState("");
  const handleLocationChange = ({ target }) => {
    setLocationInput(target.value);
  };

  return (
    <div className="search">
      <form action="">
        <div className="input_wrapper">
          <input
            className="search_input"
            type="text"
            id="category"
            value={categoryInput}
            onChange={handleCategoryChange}
            placeholder="Category"
            required
          />
          <input
            className="search_input"
            type="text"
            id="location"
            value={locationInput}
            onChange={handleLocationChange}
            placeholder="Location"
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
