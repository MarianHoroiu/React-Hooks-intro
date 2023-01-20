import { useEffect, useState } from "react";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

  const [isMounted, setIsMounted] = useState(true);
  const [unmountMessage, setUnmountMessage] = useState("");

  // for counter functionality
  useEffect(() => {
    document.getElementById("paragraph").innerHTML = "Count has changed !";

    clearStatusMessage();
  }, [count]);
  // for unmount functionality

  useEffect(() => {
    if (!isMounted) {
      setUnmountMessage("Component will be unmounted!");

      const timeoutId = setTimeout(() => {
        setUnmountMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMounted]);

  // for counter functionality
  const incrementCount = () => {
    setCount(count + 1);
  };

  // for unmount functionality
  const handleUnmount = () => {
    setIsMounted(false);
  };

  // for unmount functionality
  if (!isMounted) {
    return <p id="after-unmount"> {unmountMessage}</p>;
  }

  return (
    <div id="my-component">
      <p id="counter">You clicked {count} times</p>
      <p id="paragraph">"Message"</p>

      <button onClick={() => incrementCount()}>Click me</button>
      <p id="empty" />
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
};

// for counter functionality
const clearStatusMessage = (timer = 2000) => {
  setTimeout(() => {
    document.getElementById("paragraph").innerHTML = "Status here";
  }, timer);
};
