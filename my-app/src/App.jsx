
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user) => (
          <h2 key={user.id}>{user.name}</h2>
        ))
      )}
    </>
  );
}

export default App;