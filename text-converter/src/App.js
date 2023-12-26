import Navbar from "./navbar";
import React, { useState } from "react";
import "./App.css";
import TextForm from "./textform";
import About from "./About";
import Alert from "./Alert";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 15000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode is enabled", "success");
      document.title = "Text-converter  - light mode ";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#034a7f";
      showAlert("light mode is enabled", "success");
      document.title = "Text-converter - dark mode ";
    }
  };
  // function for green dark mode
  // const greenMode = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("dark mode is enabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "green";
  //     showAlert("light mode is enabled", "success");
  //   }
  // };

  // // function for red dark mode
  // const redMode = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("dark mode is enabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "red";
  //     showAlert("light mode is enabled", "success");
  //   }
  // };

  // // function for black dark mode
  // const blackMode = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("dark mode is enabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "black";
  //     showAlert("light mode is enabled", "success");
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <Router>
          <Navbar
            title="text-converter "
            mode={mode}
            toggleMode={toggleMode}
            // greenMode={greenMode}
            // redMode={redMode}
            // blackMode={blackMode}
          ></Navbar>
          <Alert alert={alert}></Alert>
         
          <div container="my-3">
            <Switch>
              <Route exact path="/About" element={<About></About>}><About></About></Route>
              <Route exact path ="/" element={<TextForm></TextForm>}>
              <TextForm heading="Enter your text" mode={mode}></TextForm>
              </Route>
            </Switch>
          </div>
        </Router>
      </BrowserRouter>
      {/* //{" "} */}
      {/* <About></About>
      // <div className="container my-3">
      //   <TextForm heading="Enter your text" mode={mode}></TextForm>
      // </div> */}
    </>
  );
}

export default App;
