import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import MyButton from './MyButton';
import GreetClass from './GreetClass';
import StateFunction from './StateFunction';

function App() {


  const firstButton=()=>{
    alert("First Button clicked")
  }

  const secondButton=()=>{
    alert("Second Button clicked")
  }

  return (
    <div className="App">
     <p>hello to react</p>
     <StateFunction/>
     <GreetClass value="Code"/>
     {/* <Greet value="Code" color="red"></Greet>
   
     <Greet value="Quotient"></Greet>
    */}

    <MyButton value="Send"  click={firstButton}/>
    <MyButton value="Click me" click={secondButton}/>

    </div>
  );
}

export default App;
