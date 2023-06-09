import styled from 'styled-components'
import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';

function App() {
  return (
    <Wrapper>
      {/* <div className='calculator-body'> */}
        <Calculator/>
      {/* </div> */}
      {/* <div className='history-body'> */}
        <History/>
      {/* </div> */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: #dde1e7;
  display: grid;
  place-items: center;
  row-gap: 2rem;
  padding-block: 2rem;
  width: min(100%,1000px);
  margin: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    padding-block: 0;
  }
`
