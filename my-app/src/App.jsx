import { useCallback, useState } from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("child Button clicked");
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child handleClick={handleClick} />
    </>
  );
}

export default App;