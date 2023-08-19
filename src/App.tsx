import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillSunFill,BsFillMoonFill } from "react-icons/bs"
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  return (
    <>
      <header>
        <div>calc</div>
        <div>
            {darkTheme ? <BsFillSunFill className='icons' onClick={toggleTheme}/> :
            <BsFillMoonFill className='icons' onClick={toggleTheme}/>}
            <a href="#"><FaGithub className='icons'/></a>
            <a href="#"><FaFacebook className='icons'/></a>
            <a href="#"><FaLinkedin className='icons'/></a>
        </div>
      </header>
      <main>
          <Calculator/>
          <History/>
      </main>
    </>
  );
}

export default App;