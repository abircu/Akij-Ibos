import{COLORCHANGED,STATUSCHANGED} from"./actionTypes";

export const statuschanged=(status)=>{
    return{
        type:STATUSCHANGED,
        payload: status,
        
    }
}

export const colorchanged=(color,changeType)=>{
    return{
        type:COLORCHANGED,
        payload:{
            color,changeType
        }
    }
}

