import Calculator from './Components/Calculator/Calculator';
import History from './Components/History';
import { FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillSunFill,BsFillMoonFill } from "react-icons/bs"
import { useState } from 'react';

const getTheme = () => {
  const localTheme = JSON.parse(`${localStorage.getItem("darkTheme")}`) === true;
  document.body.classList.toggle("darkTheme", localTheme);
  return localTheme;
}
function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(getTheme());
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("darktheme",!darkTheme);
    localStorage.setItem("darkTheme", JSON.stringify(!darkTheme))
  }
  return (
    <>
      <header>
        <p>Built by Okonnah Victoria 💙.</p>
        <div className='icon-container'>
            {darkTheme ? <BsFillSunFill className='icons' onClick={toggleTheme}/> :
            <BsFillMoonFill className='icons' onClick={toggleTheme}/>}
            <a href="#" target='_blank' rel="noreferrer"><FaGithub className='icons'/></a>
            <a href="https://www.linkedin.com/in/victoria-okonnah-562338247" target='_blank' rel="noreferrer"><FaLinkedin className='icons'/></a>
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
