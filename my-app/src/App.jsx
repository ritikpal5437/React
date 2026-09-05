// import {useRef} from 'react';


// function app() {
//   const countRef=useRef(0);

//   function handleClick() {
//     countRef.current++;
//     console.log(countRef.current);
//   }

//   return(
//     <>
//     <h1>useRef Practise</h1>
//     <button onClick={handleClick}>click me</button>
//     </>
//   );
// }
// export default app;
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;