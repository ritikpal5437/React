
// import { useEffect, useState } from "react";
// import Card from "./components2/card";
// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <h2>Loading...</h2>
//       ) : (
//         users.map((user) => (
//           <h2 key={user.id}>{user.name}</h2>
          
//         ))
        
//       )}
//     </>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
  }

  return (
    <>
      <button onClick={getUsers}>Get Users</button>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </>
  );
}

export default App;