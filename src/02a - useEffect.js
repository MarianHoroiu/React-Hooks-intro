import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Click no.  ${count}`;
  });

  // // this will run when the component mounts and anytime the stateful data changes
  // useEffect(() => {
  //   document.getElementById("paragraph").innerHTML =
  //     "Component did mount or some data changed !";

  //   clearStatusMessage();
  // });

  // // this will run, when the component is first initialized
  // useEffect(() => {
  //   document.getElementById("paragraph").innerHTML =
  //     "Component is first initialized !";

  //   clearStatusMessage();
  // }, []);

  // // this will run only when count state changes
  // useEffect(() => {
  //   document.getElementById("paragraph").innerHTML = "Count has changed !";

  //   clearStatusMessage();
  // }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <p id="paragraph">"Message"</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

const clearStatusMessage = (timer = 2000) => {
  setTimeout(() => {
    document.getElementById("paragraph").innerHTML = "Status here";
  }, timer);
};
