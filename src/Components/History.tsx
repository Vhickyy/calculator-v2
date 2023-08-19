import styled from "styled-components"
import { useCalculator } from "../context/CalculatorContext"
const History = () => {
  const {history, clearLocalStorage} = useCalculator()
  return (
    <Wrapper>
      <div className="scroll">
       <button className='scrollBtn'>C</button>
      </div>
      {history.length < 1 ? <>
      <div className="empty">
       <h2>No History</h2>
      </div>
      </> : <>
      <div className='text'>
        {history.map((result:string[],index)=>{
          return (
            <div key={index}>
              <p>{result.slice(0,-1).join(" ")}</p>
              <p>{result.slice(-1)}</p>
            </div>
          )
        })}
      </div>
      <div className='clear' onClick={clearLocalStorage}>
        <button >Clear</button>
      </div></>
      }
    </Wrapper>
  )
}

export default History

const Wrapper = styled.div`
  background-color: #dde1e7;
  width: 21rem;
  height: 34rem;
  border-radius: 1rem;
  box-shadow: -7px -7px 7px #ffffff70, 7px 7px 5px rgba(94, 104, 121, .2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .scroll{
    padding: .7rem 0;
    border-bottom: 1px solid whitesmoke;
  }
  .scrollBtn{
    position: relative;
    top: 0;
    padding: .8rem;
    margin-left: 1rem;
  }
  .empty{
    height: 30rem;
    display: grid;
    place-items: center;
  }
  .text{
    padding: 1rem;
    text-align: end;
    overflow-y: auto;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    height: 25rem;
    /* background-color: green; */
  }
  .clear{
    padding: 1.2rem 0;
    border-top: 1px solid whitesmoke;
    display: grid;
    place-items: center;
  }
  .clear button{
    margin-top: 0;
    padding: .7rem 2.5rem;
    border-radius: .5rem;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
    background-color: #dde1e7;
    color: #4b4646;
    border: none;
  }
  @media screen and (min-width: 768px)  {
    .text{
      height: 30rem;
    }
  }
`
