import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;