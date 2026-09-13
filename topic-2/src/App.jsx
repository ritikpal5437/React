import Navbar from "./components/Navbar";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <>
      <Navbar />

      <h1>Student Dashboard</h1>

      <StudentInfo
        name="Ritik"
        course="MCA"
        age={21}
      />
    </>
  );
}

export default App;