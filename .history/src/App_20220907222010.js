import React, {useState} from "react"M
import Search from "./components/Search";

function App() {
  const apiurl ="http://www.omdbapi.com/?i=tt3896198&apikey=55c1c89b";
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search/>
      </main>
    </div>
  );
}

export default App;
