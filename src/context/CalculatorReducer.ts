export const initialState = {
    currentValue:'',
    previousValue:'',
    operation:'',
    newValue:true,
    getHistory:[],
    history:[]
}
export type InitialStateProp = {
    currentValue: string
    previousValue: string
    operation: string
    newValue: boolean
    getHistory: string[]
    history: string[][]
}
type InputValueOrOperation = {
    type:"INPUT_VALUE" | "INPUT_OPERATION" | "PERCENT"
    payload:string
}
type Manipulateinput = {
    type : "CLEAR_INPUTS" | "DELETE_INPUTS" | "CLEAR" | "EVALUATE"
}
const calculate = ({value1,value2,operation}:{value1:string,value2:string,operation:string}) : number=>{
    let val1 = Number(value1);
    let val2 = Number(value2);
    let result:number = 0
    if(operation === '+'){
        result = val2 + val1;
    } else if(operation === '-'){
        result = val2 - val1;
    }else  if(operation === '*'){
        result = val2 * val1;
    }else  if(operation === '/'){
        result = val2 / val1;
    }
    return result;
}
export const reducer = (state: InitialStateProp,action: InputValueOrOperation | Manipulateinput)=>{
    //Value Input
    if(action.type === "INPUT_VALUE"){
        if(state.newValue && action.payload === '.'){
            return ({...state,currentValue:'0.',newValue:false})
        };
        if(state.newValue && action.payload === '0'){
            return ({...state,currentValue:'0'})
        };
        if(state.currentValue.includes("=") || (state.currentValue.includes("NaN") || state.currentValue === '0')){
            return ({...state,currentValue:action.payload,newValue:false})
        };
        if(state.currentValue.includes('.') && action.payload === '.'){
            return ({...state})
        };
        return ({...state,currentValue:`${state.currentValue}${action.payload}`,newValue:false});
    };
    //Operation input
    if(action.type === "INPUT_OPERATION"){
        if(state.currentValue.includes('NaN') && action.payload){
            return {...state, currentValue:'',previousVal:'',operation:'',newVal:true}
        };
        if(!state.previousValue && state.currentValue.includes('=')){
            return {...state,previousValue:state.currentValue.slice(1),operation:action.payload,newValue:true,currentValue:'',getHistory:[...state.getHistory,state.currentValue.slice(1),action.payload]}
        }
        if(!state.previousValue && state.currentValue){
            return({...state,currentValue:'',operation:action.payload,previousValue:state.currentValue,newValue:true,getHistory:[...state.getHistory,state.currentValue,action.payload]})
        };
        if(state.currentValue && state.previousValue){
            const result = calculate({value1:state.currentValue,value2:state.previousValue,operation:state.operation})
            if(result.toString().includes('NaN')){
                return {...state,previousValue:'',currentValue:`${result}`,getHistory:[],operation:'',newValue:true,history:[...state.history,[...state.getHistory,state.currentValue,`=${result}`]]};
            }
            return {...state,previousValue:result.toString(),operation:action.payload,newValue:true,currentValue:'',getHistory:[...state.getHistory,state.currentValue,action.payload]}
        }
        if(state.previousValue){
            const newHistory = [...state.getHistory]
            const newarray = newHistory.slice(0,-1)
            const sign = newHistory.slice(-1);
            sign[0] = action.payload;
            return {...state,operation:action.payload,getHistory:[...newarray,...sign]}
        }
    }
    // Clear all input
    if(action.type === 'CLEAR_INPUTS'){
        return {...initialState,history:JSON.parse(`${localStorage.getItem('history')}`) || []}
    }
    //Delete input
    if(action.type === 'DELETE_INPUTS'){
        if((state.currentValue.includes('=')) || (state.currentValue.length === 1)){
            return {...state,currentValue:'', newValue:true};
        }else if((state.currentValue.length) || (state.currentValue.includes('.'))){
            return {...state,currentValue:state.currentValue.slice(0,-1)};
        }
    }
    //Percent input
    if(action.type === 'PERCENT'){
        if(action.payload === '%'){ 
            if(state.currentValue.includes('=')){
                const current = state.currentValue;
                const newNum = (Number(current.slice(1)) / 100).toString();
                return {...state,currentValue:`=${newNum}`,history:[...state.history,[current.slice(1),'%',`= ${newNum}`]]}
            }
            if(!state.previousValue && state.currentValue !== ""){
                const newNum = parseInt(state.currentValue) / 100;
                return {...state,currentValue:`=${newNum}`,newValue:true,history:[...state.history,[state.currentValue, '%',`= ${newNum}`]]}
            }
            if(state.currentValue){
                const newNum = parseInt(state.currentValue) / 100;
            return {...state,currentValue:newNum.toString(),newValue:true}
            }
        }  
    }
    if(action.type === 'EVALUATE'){
        if(state.currentValue && state.previousValue){
            const result = calculate({value1:state.currentValue,value2:state.previousValue,operation:state.operation})
            return  {...state, previousValue:'',operation:'',currentValue:`=${result}`,newValue:true,getHistory:[],history:[...state.history,[...state.getHistory,state.currentValue,`=${result}`]]}
        }
    }
    //Clear history
    if(action.type === 'CLEAR'){
            return {...state,his:[]}
    }
    return state
}