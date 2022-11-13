
import './App.css';
import React,{ useState } from 'react';
import Navbar from './Navbar';
import TextForm from './TextForm'
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

//  import Aboutus from './Aboutus'
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert =(message, type)=>
  {
    setalert(
      {
        
        msg: message,
        type: type
      }
    
    )
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }
  const toggleMode=()=>
{
  if(mode==='light')
  {
    setmode('dark')
    document.body.style.backgroundColor='#020320'
    showalert("Dark mode has been enabled","success")
    document.title='TextUtils-DarkMode'
  }
  else
  {
    setmode('light');
    document.body.style.backgroundColor='white'
    showalert("Light mode has been enabled","success")
    document.title='TextUtils-LightMode'



  }
}
  return (
// THIS IS EXISTING DATA OF REACT APP

    // <>
    // <h1>hey abhii welcome on react app</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with ABHIII
    //     </a>
    //   </header>
    // </div>

    //THIS IS MODIFIED DATA : FOR NAVBAR
/* <>
<h1>hey {name}</h1>
<div className="navbar">
  <ul>
    <li>home</li>
    <li>about</li>
    <li>contact</li>
  </ul>
</div>
</> */
<>
{/* <Router> */}
<Navbar  title ='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About Us'/>
<Alert alert={alert}/>
<div className="container my-4">
{/* <Routes>

<Route exact path="/Aboutus" element={<Aboutus/>}/>
         
         
<Route exact path="/" element=  */}
{<TextForm heading='Enter Your Text here to analyze' showalert={showalert} mode={mode}/>}   
{/* </Routes> */}
 
 </div>
{/* //  </Router> */}


</>
  );
}

export default App;
