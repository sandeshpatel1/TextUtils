import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
    const showAlert = (message,type)=>{
      setalert({
        msg : message,
        type : type
      }) 
      setTimeout(() => {
        setalert(null)
      }, 2000);
    }

    const toggleMode= ()=>{
      if (mode=== 'light'){
        setmode('dark');
        document.body.style.backgroundColor = "black";
        showAlert("Dark Mode Has Been Enabled", "success")
      }
        else{
        setmode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Default Mode", "success");
        }
    
  }
  return (
    <>
   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    
   <Routes>
            <Route path="/about" element={<About title="About Us" mode={mode} />}/>
            <Route path="/" element={<TextForm  showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          </Routes>
          
    </div>
    </Router> 
   </>
  );
}

export default App;

