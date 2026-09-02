import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// function app(params) {
//   return(
//     <h1>hello react</h1>
//   );
// }
// export default app;
// function app(params) {
//   let name="Ritik";
//   return(
//     <h1>Hello {name} !</h1>// {} ke andr hm js likh skte h
//   );
// }
// export default app;
// let name = "Ritik";
// let age = 21;
// function app(params) {
//   return(
//     <>          // =react ke JSX ke and js expresion chl rha h. isko freagment bolte h ele ko ek sath return kr skte h bina div lgaye
//       <h1>Hello {name} ! </h1>
//       <p>My Age is {age}</p>
//       <p>Next Year My Age will be {age+1}</p></>
  
//   );
// }
// export default app;

// import Greeting from "./Greeting";

// function App() {
//   return (
//     <>
//     <h1>Hello Ritik !</h1>
//     <Greeting />  
//      {/* greeting properly  import+render ho gyA */}
// </>
//   );
// }
// export default App;  
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