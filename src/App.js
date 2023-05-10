import "./styles.css";
import { useState } from "react";
var headingtext = "inside out";
var color = "blue";

export default function App() {
  const [counter, setCounter] = useState(0);

  function likeClickHandler() {
    var Updatecounter = counter + 1;
    setCounter(Updatecounter);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingtext}</h1>
      <button onClick={likeClickHandler}>Like me!</button>
      {counter}
    </div>
  );
}
