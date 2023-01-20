import { createContext } from "react";

// Create the context
export const MessageContext = createContext("Initial value");

// The provider component that provides the message value
export const MessageProvider = ({ children }) => {
  const message = "Hello, world!";

  return (
    <MessageContext.Provider value={message}>
      {children}
    </MessageContext.Provider>
  );
};
