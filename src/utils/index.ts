export const calculate = ({value1,value2,operation}:{value1:string,value2:string,operation:string}) : number | string=>{
    if(value2.includes("∞")){
        value2 = "Infinity";
    }
    let val1 = Number(value1);
    let val2 = Number(value2);
    let result:number | string = 0
    if(operation === '+'){
        result = val2 + val1;
    } else if(operation === '-'){
        result = val2 - val1;
    }else  if(operation === '×'){
        result = val2 * val1;
    }else  if(operation === '÷'){
        result = val2 / val1;
    }
    if (result.toString() === "Infinity"){
        result = "∞"
    }
    return result;
}