import { useState } from "react";

export const CustomHook = () => {
  const [count, increment] = useCounter();

  return <button onClick={increment}>You have clicked {count} times</button>;
};

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
};
