import styled from "styled-components"
import { useCalculator } from "../context/CalculatorContext"
const History = () => {
  const {history, clearLocalStorage} = useCalculator()
  return (
    <Wrapper>
      <div className='text'>
        {history.map((result,index)=>{
          return (
            <div key={index}>
              <p>{result.slice(0,-1).join(" ")}</p>
              <p>{result.slice(-1)}</p>
            </div>
          )
        })}
        {/* <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div> */}
      </div>
      <div className='clear' onClick={clearLocalStorage}>
        <button >Clear</button>
      </div>
    </Wrapper>
  )
}

export default History

const Wrapper = styled.div`
  background-color: #dde1e7;
  width: 21rem;
  /* height: 85vh; */
  height: 34rem;
  border-radius: 1rem;
  box-shadow: -7px -7px 7px #ffffff70, 7px 7px 5px rgba(94, 104, 121, .2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 0;
  z-index: 0;
  .text{
    padding: 1rem;
    text-align: end;
    overflow-y: auto;
    font-size: 1.2rem;
    display: grid;
    gap: .5rem;
  }
  .clear{
    padding: 1.2rem 0;
    border-top: 1px solid whitesmoke;
    display: grid;
    place-items: center;
  }
  .clear button{
    /* padding: 0; */
    margin-top: 0;
    padding: .7rem 2.5rem;
    border-radius: .5rem;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
    background-color: #dde1e7;
    color: rgb(75, 70, 70);
    border: none;
  }
  @media screen and (max-width:400px) {
      height: 40rem;
  }
`

{/* <div className='text'>
         <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
         <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
         <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
         <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
         <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
        <div>
          <p>2/3/4*5/5*6*6/5</p>
          <p>23344=</p>
        </div>
      </div> */}