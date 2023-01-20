import { MessageDisplay } from "./useContext/MessageDisplay";
import { MessageProvider } from "./useContext/MessageProvider";

// The root component that renders the provider and the display component
export const UseContext = () => {
  return (
    <MessageProvider>
      <MessageDisplay />
    </MessageProvider>
  );
};
