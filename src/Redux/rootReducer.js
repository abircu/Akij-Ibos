import todoReducer from'./Todo/Reducer';
import filterReducer from'./Filter/Reducer';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({
    todo: todoReducer,
    filter: filterReducer,
})
export default rootReducer;