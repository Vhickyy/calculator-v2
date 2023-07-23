import { InputbtnStyle } from '../../styles/Buttonstyle';
import { useCalculator } from '../../context/CalculatorContext';

const Button = ({ value}:{value:string}) => {
    const {inputVal} = useCalculator()
    const handleInput = (value: string) =>{
        inputVal(value);
    }
  return (
    <InputbtnStyle onClick={()=>handleInput(value)}>{value}</InputbtnStyle>
  )
}

export default Button