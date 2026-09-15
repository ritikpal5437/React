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
🔜 useState
🔜 Events (onClick, onChange, etc.)
🔜 Conditional Rendering
🔜 Lists + map() + key
🔜 Forms / Controlled Components
🔜 State lifting

Phase 2 — Hooks
10. useEffect
11. useRef
12. useContext
13. useMemo
14. useCallback

Phase 3 — API + Real App
15. fetch / API calls
16. Loading state
17. Error handling
18. Search / filter
19. CRUD-style operations

Phase 4 — Routing
20. React Router
21. BrowserRouter
22. Routes / Route
23. Link / NavLink
24. Dynamic routes (/user/:id)
25. useParams
26. Navigation
