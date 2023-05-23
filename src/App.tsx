import styled from 'styled-components'
import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';

function App() {
  return (
    <Wrapper>
      {/* <div className='calculator-body'> */}
        <Calculator/>
      {/* </div> */}
      <div className='history-body'>
        <History/>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  background-color: #dde1e7;
  display: grid;
  place-items: center;
  row-gap: 2rem;
  padding-block: 2rem;
  /* .calculator-body{
    display: grid;
    place-items: center;
    height: 100vh;
  }  */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    padding-block: 0;
  }
`
