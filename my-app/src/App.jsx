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

  function handleClick() {
    countRef.current++;
    console.log(countRef.current);
  }
