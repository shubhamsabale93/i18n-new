import React, { useState } from 'react';
import "./App.css";
import i18n from  "./../utils/i18n"



const userCount=15;
function App() {
    const [lang,setLang]=useState("mr");
  return (
    <div>

    <h1>{i18n("welcomemessage")}</h1>

    <p>{i18n("normalMessage")}</p>

    <h3>{i18n("greetingMessage")}</h3>


    <select defaultValue={localStorage.getItem("lang")} onChange={(e)=>{

        localStorage.setItem("lang",e.target.value);


        
    }}>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
    </select>
    </div>

    
  )
}

export default App