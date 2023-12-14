import React, { useState } from 'react';
import './ComponentStyle.css';


function Calculator() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [result, setResult] = useState('Awaiting Inputs...');

    const calculate = (operator) => {
        const firstNum = parseInt(first);
        const secondNum = parseInt(second);
        let calculationResult;

        if (operator === '+') {
            calculationResult = firstNum + secondNum;
        } else if (operator === '-') {
            calculationResult = firstNum - secondNum;
        } else if (operator === 'x') {
            calculationResult = firstNum * secondNum;
        } else if (operator === '/') {
            calculationResult = firstNum / secondNum;
        }

        console.log(calculationResult);
        setResult(calculationResult);
    };

    const resetCalculator = () => {
        setFirst('');
        setSecond('');
        setResult('Reset!');
    };

    return (
        <div className = "box">
            <label>First Number</label>
            <input className="first" value={first} onChange={(e) => setFirst(e.target.value)} />
            <div></div>

            <label>Second Number</label>
            <input className="second" value={second} onChange={(e) => setSecond(e.target.value)} />

            <div>
            <button onClick={() => calculate('+')}>+</button>
            <button onClick={() => calculate('-')}>-</button>
            <button onClick={() => calculate('x')}>x</button>
            <button onClick={() => calculate('/')}>/</button>
            </div>

            <p className="result">{result}</p>

            <button onClick={resetCalculator}>Reset</button>
        </div>
    );
}

export default Calculator;

// Used previous Calculator and adjusted syntax to match JSX