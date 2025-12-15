import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter != 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  const remValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value : {counter} :</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={remValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
