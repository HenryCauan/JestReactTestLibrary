import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("This Message is to Henry Cauan")

  return (
    <>
      <h1>Hello World!</h1>
      <p>{message}</p>
      <button onClick={() => setMessage("The Messagem to Alterada")}>Click to change</button>
    </>
  );
};

export default App;
