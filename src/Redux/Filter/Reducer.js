import {COLORCHANGED,STATUSCHANGED} from'./actionTypes';
import intialState from './intialState';

const reducer=(state=intialState, action)=>{
    switch(action.type){
        case STATUSCHANGED:
            return {
                ...state,
                status:action.payload,
            }
        case COLORCHANGED:
                const {color,changeType} =action.payload;
                switch(changeType){
                    case'added':
                     return{
                        ...state,
                        colors:[
                            ...state.colors,
                            color,
                        ]
                     }
                    case'remove':
                     return{
                        ...state,
                        corols: state.colors.filter(existingColor =>existingColor !==color),

                     }
                }
    }
}
export default reducer;