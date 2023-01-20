import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useState hook</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};
