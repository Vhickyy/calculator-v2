export type InitialStateProp = {
    currentValue: string
    previousValue: string
    operation: string
    newValue: boolean
    getHistory: string[]
    history: string[][]
}
export type InputValueOrOperation = {
    type:"INPUT_VALUE" | "INPUT_OPERATION" | "PERCENT"
    payload:string
}
export type Manipulateinput = {
    type : "CLEAR_INPUTS" | "DELETE_INPUTS" | "CLEAR" | "EVALUATE"
}