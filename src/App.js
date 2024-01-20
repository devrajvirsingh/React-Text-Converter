import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setdarkMode] = useState("light");

  const changetodark = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <NavBar darkMode={darkMode} changetodark={changetodark} />
      <div className="container w-75">
       <TextForm darkMode={darkMode}/>
      </div>
    </>
  );
}

export default App;
