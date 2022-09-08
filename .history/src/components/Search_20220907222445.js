import React from "react";

function Search() {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie"
        className="searchbox"
        onChange={handleInput}
      />
    </section>
  );
}

export default Search;
