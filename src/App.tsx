import styled from 'styled-components'
import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';
import {FaGithub} from "react-icons/fa"

function App() {
  return (
    <>
      <Header>
        <div>calc</div>
        <div>
          <a href="#"><FaGithub className='icons'/></a>
        </div>
      </Header>
      <Wrapper>
          <Calculator/>
          <History/>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.main`
  /* min-height: 100vh; */
  background-color: #dde1e7;
  display: grid;
  place-items: center;
  row-gap: 2rem;
  padding-block: 1rem 2rem;
  width: min(100%,1000px);
  margin-inline: auto;
  /* background-color: green; */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    padding-block: 0;
  }
`
const Header = styled.header`
display: flex;
justify-content: space-between;
width: min(90%,770px);
margin-inline: auto;
padding-block: 1rem;
.icons{
  width: 2rem;
  height: 2rem;
  color: black;
}
/* @media screen and (max-width:400px){
  padding-block: 1rem .5rem;
} */
`