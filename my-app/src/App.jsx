// 
function App() {

  const names = ["Ritik", "Vicky", "Ravit"];

  return (
    <>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </>
  );
}

export default App;