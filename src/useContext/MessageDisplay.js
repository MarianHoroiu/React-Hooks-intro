import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

// A component that displays the context value
export const MessageDisplay = () => {
  const message = useContext(MessageContext);

  return (
    <>
      <h4>From MessageDisplay component</h4>
      <p>{message}</p>
    </>
  );
};
