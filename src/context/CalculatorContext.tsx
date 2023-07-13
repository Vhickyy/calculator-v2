import {createContext, useContext, useReducer} from 'react'
import { reducer, initialState,InitialStateProp } from './CalculatorReducer';
const initState = {
    ...initialState as InitialStateProp,
    inputVal: (_value: string) => {},
    inputOperation: (_value: string)=>{},
    deleteInput: () => {},
    evaluate: () => {},
    percent: (_value: string)=>{},
    clearLocalStorage: () =>{},
    clearAll: ()=> {},
}
const Calculatorcontext = createContext<typeof initState>({} as typeof initState);
type ContextChildren = {
    children:React.ReactNode
}
export const CalculatorProvider = ({children}:ContextChildren)=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const inputVal = (value: string)=>{
        dispatch({type:'INPUT_VALUE',payload:value})
    }
    const inputOperation = (value: string)=>{
        dispatch({type:'INPUT_OPERATION',payload:value})
    }
    const clearAll = ()=>{
        dispatch({type:'CLEAR_INPUTS'})
    }
    const deleteInput = ()=>{
        dispatch({type:'DELETE_INPUTS'})
    }
    const evaluate = ()=>{
        // console.log(state.history);
        dispatch({type:'EVALUATE'});
        // localStorage.setItem("history",JSON.stringify(state.history))
        
    }
    const percent = (value: string)=>{
        dispatch({type:'PERCENT',payload:value})
    }
    const clearLocalStorage = ()=>{
        console.log("ho");
        
        dispatch({type:'CLEAR'})
    }
    return (
        <Calculatorcontext.Provider value={{...state,inputVal,inputOperation,deleteInput,evaluate,percent,clearLocalStorage,clearAll}}>
            {children}
        </Calculatorcontext.Provider>
    )
}
export const useCalculator = () =>{
    return useContext(Calculatorcontext)
}