import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route
            exact path="/"
            element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}
          ></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
