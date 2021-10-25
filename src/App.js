import React from 'react';
import { useState } from 'react';
import './App.css';
import redCross_icon from "./images/redCross.png";
import CourtyardCurios from './Courtyard';
import FarmestedCurios from './Farmsted';


function App() {
  
  let [show, setShow] = useState("courtyard")

  function handleCourtyard() {
    setShow("courtyard");
  }
  
  function handleFarmsted() {
    setShow("farmsted");
  }

  return ( 
    <>

    <div class="heading"><h1>Crimson Court Curios</h1></div>
    <button onClick={handleCourtyard}>Courtyard</button>
    <button onClick={handleFarmsted}>Farmsted</button>
    <div class="wrapper-header"> 
        <h3>Name</h3>
        <div class="without">
            <img src={redCross_icon} class="red-cross" />
            <h3>With out Cleansing</h3>
            <img src={redCross_icon} class="red-cross" />
        </div>
        <h3>With Cleansing</h3>
    </div>

    <div class="wrapper-main" >
      {show === "courtyard" &&
       <CourtyardCurios /> }


      {show === "farmsted" &&
         <FarmestedCurios /> }
    </div></>
  );
}

export default App;
