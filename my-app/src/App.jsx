import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("component rendered");
  // },[] );
  useEffect(() => {
    const interval=setInterval(()=>{
    console.log('Timer Running');
    
    },1000
  );
    // console.log("Effect Started");

    return()=>{
      clearInterval(interval)
      console.log('cleanup');
      
    };
  },[] );

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