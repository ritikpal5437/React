// 
// function App() {

//   const names = ["Ritik", "Vicky", "Ravit"];

//   return (
//     <>
//       {names.map((name) => (
//         <h2>{name}</h2>
//       ))}
//     </>
//   );
// }

// export default App;
function App(params) {
  const fruits = ["Apple" , "Banana" , "Mango","Orange" ];
  return(
    <>
    {fruits.map((fruits)=>(
      <h2>{fruits}</h2>

    ))}
    </>
  );
}
export default App;