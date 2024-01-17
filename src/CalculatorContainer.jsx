import Button from "./Buttons";
import { useState } from "react";

function CalculatorContainer(){
    const buttons = [1,2,3,4,5,6,7,8,9,0,"-", "x", "/","+","="]
    const [inputValue, setInputValue] = useState('')
    const [calculation, setCalculation] = useState('')

    const handleClick = (button) => {
        if (button === '=') {
            try {
                const result = eval(calculation);
                setInputValue(result.toString());
                setCalculation('');
            } catch (error) {
                setInputValue('Error');
                setCalculation('');
            }
        } else if (button === 'x') {
            setCalculation((prevCalc) => prevCalc + '*');
            setInputValue((prevInput) => prevInput + button);
        } else {
            setCalculation((prevCalc) => prevCalc + button);
            setInputValue((prevInput) => prevInput + button);
        }
    }

    const btnDigit = buttons.map((num,i) => {
        return (
            <div key={i}>
                <Button button={num} handleClick={()=>handleClick(num)} />
            </div>
        )
    })

    return (
        <div className="calc-container">
            
            <div className="calc-info-container">
                <div className="input-field">{inputValue}</div>
                <h1 className="clear">CE</h1>
                <h1 className="answer-field">Ans.</h1>
            </div>

            <div className="btns-container">
                {btnDigit}
            </div>
            
        </div>
    )
}

export default CalculatorContainer;