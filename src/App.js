import "./App.css";
import { UseState } from "./01 - useState";
import { UseEffect } from "./02a - useEffect";
import { CleanUp } from "./02b - useEffect-with-cleanup";
import { UseContext } from "./03 - UseContext";
import { AnotherComponent } from "./useContext/AnotherComponent";
import { CustomHook } from "./05 - CustomHook";
import { UseMemo } from "./04 - useMemo";

function App() {
  // const MyContext = React.createContext(initialValue);

  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        {/* <UseEffect /> */}
        {/* <CleanUp /> */}
        {/* <UseContext /> */}
        {/* <AnotherComponent /> */}
        {/* <UseMemo /> */}
        {/* <CustomHook /> */}
      </header>
    </div>
  );
}

export default App;
