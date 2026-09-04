import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component rendered");
  }, []);

  return (
    <>
      <h1>My React App</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Navbar />

      <Card name="Ritik" age={21} course="MCA" />
      <Card name="Vicky" age={22} course="MCA" />
      <Card name="Ravit" age={23} course="MCA" />
    </>
  );
}

export default App;