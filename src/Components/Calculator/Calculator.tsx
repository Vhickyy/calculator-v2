import { useCalculator } from '../../context/CalculatorContext';
import styled from 'styled-components';
import { OperationbtnStyle } from '../../styles/Buttonstyle';
import Button from './Button';

const Calculator = () => {
    const {currentValue,previousValue,operation,inputOperation,deleteInput,percent,evaluate,clearAll} = useCalculator();
    const handleOperation = (e: any) =>{
        inputOperation(e.target.textContent)
    }
  return (
    <Wrapper>
        <div className='output'>
            <div>{previousValue} {operation}</div>
            <div>{currentValue}</div>
        </div>
        <div className='button-section'>
            <div className='grid'>
                <OperationbtnStyle  onClick={clearAll}>AC</OperationbtnStyle>
                <OperationbtnStyle  onClick={deleteInput}>Del</OperationbtnStyle>
                <OperationbtnStyle  onClick={(e:any) => percent(e.target.textContent) }>%</OperationbtnStyle>
                <OperationbtnStyle  onClick={handleOperation}>÷</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='7'/>
                <Button value='8'/>
                <Button value='9'/>
                <OperationbtnStyle onClick={handleOperation}>×</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='4'/>
                <Button value='5'/>
                <Button value='6'/>
                <OperationbtnStyle onClick={handleOperation}>-</OperationbtnStyle>
            </div>
            <div className='grid'>
                <Button value='1'/>
                <Button value='2'/>
                <Button value='3'/>
                <OperationbtnStyle className='operation' onClick={handleOperation}>+</OperationbtnStyle>
            </div>
            <div className='last-grid'>
                {/* <OperationbtnStyle className='operation'>H</OperationbtnStyle> */}
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
    background-color: #dde1e7;
    width: 21rem;
    height: 34rem;
    /* height: 84vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 3rem 1rem 1rem 1rem;
    box-shadow: -7px -7px 7px #ffffff70, 7px 7px 5px rgba(94, 104, 121, .2);
    .output{
        color: black;
        padding: 1.2rem 0;
        border-radius: .3rem;
        height: 100%;
        /* background-color: blue; */
        display: grid;
        align-content: end;
        text-align: end;
        font-size: 1.4rem;
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
        /* background-color: green; */
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
        //height: 35rem;
        .button-section{
           row-gap: .7rem;
        }
    }
`
