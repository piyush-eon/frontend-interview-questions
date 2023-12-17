import {useEffect, useState} from "react";
import useCustomEffect from "../hooks/use-custom-effect";

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered:", count);
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  console.log("rerendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
