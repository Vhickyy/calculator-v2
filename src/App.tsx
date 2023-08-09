import styled from 'styled-components'
import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillSunFill,BsFillMoonFill } from "react-icons/bs"

function App() {
  return (
    <>
      <Header>
        <div>calc</div>
        <div>
            <BsFillSunFill className='icons'/>
            <BsFillMoonFill className='icons'/>
            <a href="#"><FaGithub className='icons'/></a>
            <a href="#"><FaFacebook className='icons'/></a>
            <a href="#"><FaLinkedin className='icons'/></a>
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
  background-color: #dde1e7;
  display: grid;
  place-items: center;
  row-gap: 2rem;
  padding-block: .5rem 2rem;
  width: min(100%,1000px);
  margin-inline: auto;
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
`