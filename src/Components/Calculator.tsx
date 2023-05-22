import { useCalculator } from '../context/CalculatorContext';

const Calculator = () => {
    const {currentValue,previousValue,operation,inputOperation,inputVal,deleteInput,percent,evaluate,clearAll} = useCalculator();
    
    
    const handleInput = (e: any) =>{
        // console.log(e.target.textContent);
        inputVal(e.target.textContent);
    }
    const handleOperation = (e: any) =>{
        // console.log(e.target.textContent);
        inputOperation(e.target.textContent)
    }
  return (
    <div className='calculator'>
        <div className='output'>
            <div>{previousValue} {operation}</div>
            <div>{currentValue}</div>
        </div>
        <div className='button-section'>
            <div className='grid'>
                <button className='operation' onClick={clearAll}>AC</button>
                <button className='operation' onClick={deleteInput}>Del</button>
                <button className='operation' onClick={(e:any) => percent(e.target.textContent) }>%</button>
                <button className='operation' onClick={handleOperation}>/</button>
            </div>
            <div className='grid'>
                <button onClick={(e)=>handleInput(e)}>7</button>
                <button onClick={(e)=>handleInput(e)}>8</button>
                <button onClick={(e)=>handleInput(e)}>9</button>
                <button className='operation' onClick={handleOperation}>*</button>
            </div>
            <div className='grid'>
                <button onClick={(e)=>handleInput(e)}>4</button>
                <button onClick={(e)=>handleInput(e)}>5</button>
                <button onClick={(e)=>handleInput(e)}>6</button>
                <button className='operation' onClick={handleOperation}>-</button>
            </div>
            <div className='grid'>
                <button onClick={(e)=>handleInput(e)}>1</button>
                <button onClick={(e)=>handleInput(e)}>2</button>
                <button onClick={(e)=>handleInput(e)}>3</button>
                <button className='operation' onClick={handleOperation}>+</button>
            </div>
            <div className='grid'>
                <button className='operation'>H</button>
                <button onClick={(e)=>handleInput(e)}>0</button>
                <button onClick={(e)=>handleInput(e)}>.</button>
                <button className='operation' onClick={evaluate}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator;