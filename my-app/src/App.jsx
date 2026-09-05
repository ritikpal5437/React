import { useState } from "react";

function App() {
  const[isloggedIn,setIsLoggedIn]=useState(false);
  return(
    <>
    {
      isloggedIn?(
        <h1>Welcome Ritik</h1>
      ) : (
        <h1>Please Login</h1>
      )
    }
    <button onClick={()=> setIsLoggedIn(!isloggedIn)}>
      login / logout
      </button>
    </>
  );
  
}
export default App;