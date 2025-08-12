import { useState, useEffect } from "react";
import './assets/css/style.css'
import Java from "./components/Java.jsx";
import Python from "./components/Python.jsx";
import CPlusPlus from "./components/CPlusPlus.jsx";
import JavaScript from "./components/JavaScript.jsx";
import CSharp from "./components/CSharp.jsx";
import PHP from "./components/PHP.jsx";

function App() {
 const components = [
  { component: <Java />, bgClass: "java-bg" },
  { component: <Python />, bgClass: "python-bg" },
  { component: <CPlusPlus />, bgClass: "cPlusPlus-bg" },
  { component: <JavaScript />, bgClass: "javaScript-bg" },
  { component: <CSharp />, bgClass: "cSharp-bg" },
  { component: <PHP />, bgClass: "php-bg" }
 ];

 const [index, setIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setIndex((prevIndex) => (prevIndex + 1) % components.length);
  }, 4250);

  return () => clearInterval(interval);
 }, []);

 return <div className={components[index].bgClass}>{components[index].component}</div>;
}

export default App;