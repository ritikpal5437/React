import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navbar from "./compRouter/Navbar";
import User from "./compRouter/User";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
    </>
  );
}

function About() {
  return (
    <>
      <Navbar />
      <h1>About Page</h1>
    </>
  );
}

function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact Page</h1>
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
  },
  {
    path: "/user/:id",
    element: <User />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;