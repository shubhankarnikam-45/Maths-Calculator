
import React, { useState } from 'react'
import "./App.css"
import { getValue } from '@testing-library/user-event/dist/utils';
const App = () => {

  //created the state variable for the storing the input value on button click.
  const[input, setInput] = useState('');

  //calculate value when use click on the '=' button.
  const calculateValue=(value)=>
  {

    //list of operators
    const operators = ['+', '-', '/', '*', '%'];

    //runngng for loop on the value string and find the operator.
    let operator = null;
    for(let i=0; i<value.length;i++)
    {
      if(operators.includes(value[i]))
      {
        operator = value[i];
        break;
      }
    }

    if(!null){
      setInput(value);
      return;
    }


 
    const[operand1, operand2] = value.split(operator).map(parseFloat);


    //use swithch case to find the result.
    let result = -1;

    // console.log(operand1, operand2,operator)

    switch(operator)
    {
      case '+':
        setInput(operand1 + operand2);
        break;
      case '-':
        setInput(operand1 - operand2);
        break;
      case '/':
        setInput(operand1 / operand2);
        break;
      case '*':
        setInput(operand1 * operand2);
        break;
      case '%':
        setInput(operand1 % operand2);
        break;
      default : 
        setInput("");
        break;
    }
    
  }
  //created the handleClick function.
  const handleClick = (inputData)=>{

    if(inputData === 'C')
    {
      setInput("");
    }
    else if(inputData === '<')
    {
      setInput(input.slice(0, -1));
    }
    else if(inputData === '=')
    {
      calculateValue(input);
    }
    else {
      setInput((prev)=>prev + inputData)
    }

  }
  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>

        <div>
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('<')}>&lt;</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>

        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>

        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>

        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>

        <div>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('00')}>00</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')}>=</button>
        </div>

      </div>
    </div>
  )
}

export default App