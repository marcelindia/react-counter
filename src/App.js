import { useState, useEffect } from "react";
import "./App.css";
import Coffees from "./coffees";

function App() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect was run...", counter);
  // }, [counter]);
  //listen to variable called counter and say what it says.
  //if counter changes put something in the console
  useEffect(() => {
    setCounter(500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter:{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}> + </button>
        &nbsp;
        <button onClick={() => setCounter(0)}>RESET</button>
        &nbsp;
        <button onClick={() => setCounter(counter - 1)}> - </button>
        <Coffees />
      </header>
    </div>
  );
}

export default App;
