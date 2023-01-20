import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

// A component that displays the initial context value
export const AnotherComponent = () => {
  const message = useContext(MessageContext);

  return (
    <>
      <h4>From AnotherComponent outside Context.Provider</h4>
      <p>{message}</p>
    </>
  );
};
