import { useMemo,useState } from "react";
function App() {
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(1);

  // only value ya result hi yaad rkta h usememo
      const square = useMemo(() => {
    console.log("Calculation running...");
    return number * number;
  }, [number]);


return(
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>
    Increase count
    </button>
       <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

    <h2>Square:{square}</h2>
    </>
);
}
export default App;
