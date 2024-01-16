import Button from "./Buttons";
import { useState } from "react";

function CalculatorContainer(){
    const buttons = [1,2,3,4,5,6,7,8,9,0,"%", "x", "/","+","="]
    const [inputValue, setInputValue] = useState('')

    const handleClick = (button) => {
        setInputValue(button)
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
            <div className="calc-info">
                <h1 className="input">{inputValue}</h1>
                <h1>CE</h1>
                <h1>Ans.</h1>
            </div>

            <div className="btns-container">
            {btnDigit}
            </div>
            
        </div>
    )
}

export default CalculatorContainer;