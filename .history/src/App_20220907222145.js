import React, {useState} from "react";
import Search from "./components/Search";

function App() {

  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl ="http://www.omdbapi.com/?i=tt3896198&apikey=55c1c89b";

  const handleInput = (e) => {
    let s = e.target.value;

    setState()
  }
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
