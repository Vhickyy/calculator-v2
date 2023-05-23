import { InputbtnStyle } from '../../styles/Buttonstyle';
import { useCalculator } from '../../context/CalculatorContext';

const Button = ({ value}:{value:string}) => {
    const {inputVal} = useCalculator()
    const handleInput = (e: any) =>{
        // console.log(e.target.textContent);
        inputVal(e.target.textContent);
    }
  return (
    <InputbtnStyle onClick={(e)=>handleInput(e)}>{value}</InputbtnStyle>
  )
}

export default Button