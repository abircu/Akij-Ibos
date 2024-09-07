 import {ADDED,CLEARCOMPLETED,COLORSELECTED,TOGGLE,DELETED,CLEARCOMPLETED, ALLCOMPLETED}from"./ActionTypes"
export const added =(TodoText)=>{
    return{
        type:ADDED,
        pyload:TodoText,
    }
}
export const toggle=(TodoId)=>{
    return{
        type:TOGGLE,
        payload:TodoId,
    }
}

export const colorselected=(TodoId,color)=>{
    return{
        type:COLORSELECTED,
        payload:{
            TodoId,
            color,
        }
    }
}

export const deleted=(TodoId)=>{
    return{
        type:DELETED,
        payload:TodoId
    }
}
export const allcompleted=()=>{
    return{
        type:ALLCOMPLETED,
        
    }
}
export const clearcompleted=()=>{
    return{
        type:CLEARCOMPLETED,
    }
}