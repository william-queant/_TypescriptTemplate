import { useState } from "react";
import "./App.css";
import { Test } from "./components/Utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <Test condition={count > 3}>
        {count > 3 ? "Count is greater than 3" : "Count is not greater than 3"}
      </Test>
    </>
  );
}

export default App;
