import { useState } from "react";
import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Title title="Counter" />
      <DisplayCounter count={count} />
      <div className="btn-container">
        <Button text="+" name="increment" onClick={incrementHandler} />
        <Button text="Reset" name="reset" onClick={resetHandler} />
        <Button text="-" name="decrement" onClick={decrementHandler} />
      </div>
    </div>
  );
}

export default App;
