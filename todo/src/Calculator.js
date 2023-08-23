import React from 'react'
import './Calculator.css'
import Numbers from './Numbers'
import { useState } from 'react'
function Calculator() {
  let [Input,setInput]=useState('uytguyg');
  function handleClick(value){
    setInput(Input+value)
  }
  function calculate(value){
    let outputVal=eval(Input)
    setInput(outputVal)
  }
  function handleClear(){
    setInput("")
  }

  return (
    
    <div className='container'>
      <h1>Calculator App</h1>
      <div className='calculator'>
        <input type='text' className='output' value={Input}/>
      <Numbers handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
      </div>

    </div>
    
   
    
  )
}

export default Calculator