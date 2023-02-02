import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [message, setMessage] = useState({
    g:[]
  });
const [mes,setmes]=useState(0);

  useEffect(() => {
    axios.get("/user").then(
      (res) => {
       
      
        setMessage({g:res.data}); 
        setmes(1);
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  },[]);

console.log(mes);
  return (  
    <div className="App">
      { mes && <h1>{message.g.mess}</h1>}
    </div>
  );
}

export default App