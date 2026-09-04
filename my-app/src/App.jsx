
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1>My React App</h1>
    <Navbar /> 
    <Card name = "Ritik" age={21} course="MCA" /> 
    <Card name = "Vicky" age={22} course="MCA" /> 
    <Card name = "Ravit" age={23} course="MCA" /> 
</>
  );
}
export default App;  
// todays work 1 sept 2026
// App.jsx
//    ↓
// Props
//    ↓
// Card.jsx
//    ↓
// // Card.css