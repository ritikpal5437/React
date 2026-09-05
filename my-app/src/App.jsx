// // import { useState } from "react";

// // function App() {
// //   const[isloggedIn,setIsLoggedIn]=useState(false);
// //   return(
// //     <>
// //     {/* {
// //       isloggedIn?(
// //         <h1>Welcome Ritik</h1>
// //       ) : (
// //         <h1>Please Login</h1>   // main line jis se ki pta chlta h user login or logiout ke baare me

// //       )
// //     } */}
// //     <button onClick={()=> setIsLoggedIn(!isloggedIn)}>
// //       login / logout
// //       </button>
// //       {isloggedIn  && <h2>Welcom Ritik</h2>} // ise tb use krnge jab sirf ek hi condition true ho or kooi or conditin nahi chiye ho
// //     </>
// //   );
  
// // }
// // export default App;
// // // Ternary:

// // // condition ? A : B

// // // ➡️ True ho to A, false ho to B.

// // // AND:

// // // condition && A

// // // ➡️ True ho to A, false ho to kuch nahi.


// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       {isLoggedIn ? (
//         <h1>Welcome Ritik</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Login / Logout
//       </button>

//       {isLoggedIn && <h2>Welcome Ritik</h2>}
//     </>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;

  if (isLoggedIn) {
    message = <h1>Welcome Ritik</h1>;
  } else {
    message = <h1>Please Login</h1>;
  }

  return (
    <>
      {message}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Login / Logout
      </button>
    </>
  );
}

export default App;