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

function App() {
  const students=[
    {name:"Ritik",age :21},
    {name:"Vicky",age :22},
    {name:"Ravit",age :23}
  ];
  return(
    <>
    {students.map((student,index)=>(
     <h2 key={index}>{student.name}-{student.age}</h2>
    ))}
    </>
  );
}
 export default App;
