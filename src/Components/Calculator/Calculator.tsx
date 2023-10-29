import { useCalculator } from '../../context/CalculatorContext';
import styled from 'styled-components';
import { OperationbtnStyle } from '../../styles/Buttonstyle';
import Button from './Button';
const Calculator = () => {
    const {currentValue,previousValue,operation,inputOperation,deleteInput,percent,evaluate,clearAll} = useCalculator();
    const handleOperation = (value:string) =>{
        inputOperation(value)
    };
    const scroll = () => {
    window.scroll({
      top: 1200,
      left: 0
    })
  }
  return (
    <Wrapper>
        <button className='scrollBtn' onClick={scroll}>H</button>
        <div className='output'>
            <div className='prev'>{previousValue} {operation}</div>
            <div>{currentValue}</div>
        </div>
        <div className='button-section'>
            <div className='grid'>
                <OperationbtnStyle  onClick={clearAll}>AC</OperationbtnStyle>
                <OperationbtnStyle  onClick={deleteInput}>Del</OperationbtnStyle>
                <OperationbtnStyle  onClick={() => percent("%")}>%</OperationbtnStyle>
                <OperationbtnStyle  onClick={()=>handleOperation("÷")}>÷</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='7'/>
                <Button value='8'/>
                <Button value='9'/>
                <OperationbtnStyle onClick={()=>handleOperation("×")}>×</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='4'/>
                <Button value='5'/>
                <Button value='6'/>
                <OperationbtnStyle onClick={()=>handleOperation("-")}>-</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='1'/>
                <Button value='2'/>
                <Button value='3'/>
                <OperationbtnStyle className='operation' onClick={()=>handleOperation("+")}>+</OperationbtnStyle>
            </div>
            <div className='last-grid'>
                <Button value='0'/>
                <Button value='.'/>
                <OperationbtnStyle className='operation last-btn' onClick={evaluate}>=</OperationbtnStyle>
            </div>
        </div>
    </Wrapper>
  )
}
export default Calculator;

const Wrapper = styled.section`
    background-color: var(--backgroundColor);
    width: 21rem;
    height: 34rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 3rem 1rem 1rem 1rem;
    box-shadow: var(--shadow);
    position: relative;
    .output{
        color: var(--textColor);
        padding: 1.2rem 0;
        border-radius: .3rem;
        height: 100%;
        display: grid;
        gap: .7rem;
        align-content: end;
        text-align: end;
        font-size: 1.7rem;
        font-weight: 600;
        letter-spacing: .2rem;
        overflow-x: auto;
    }
    .prev{
        font-size: 1.2rem;
        font-weight: 600;
    }
    .button-section{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        row-gap: 1rem;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        column-gap: .7rem;
    }
    .last-grid{
        display: flex;
        gap: .7rem;
        button{
            width: 4.25rem;
        }
        .last-btn{
            width: 9.1rem;
        }
    }
    @media screen and (max-width:400px) {
        .button-section{
           row-gap: .9rem;
        }
    }
`