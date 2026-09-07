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
// function App() {
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];

//   return (
//     <>
//       {fruits.map((fruit, index) => (
//         <h2 key={index}>{fruit}</h2>
//       ))}
//     </>
//   );
// }

// export default App;
// import Card from "./components2/card";
// function App() {
//   const students=[
//     {name:"Ritik",age :21},
//     {name:"Vicky",age :22},
//     {name:"Ravit",age :23}
//   ];
//   return(
//     <>
//     {students.map((student,index)=>(
//      <Card 
//      key={index}
//      name= {student.name}
//      age={student.age} 
//      />
//     ))}
//     </>
//   );
// }
//  export default App;
// API integratte

function App() {

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <button onClick={getData}>Get Data</button>
    </>
  );
}

export default App;