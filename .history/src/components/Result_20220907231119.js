import React from "react";

function Result({ result, open }) {
  return (
    <div className="result">
      <img src={result.Poster} alt="img" />
      <h3>{result.Title}</h3>
      <h3>{result.Year}</h3>
    </div>
  );
}

export default Result;
