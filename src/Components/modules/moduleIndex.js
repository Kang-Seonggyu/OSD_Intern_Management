import { combineReducers } from 'redux';
import counter from './counter';
import momenter from "./momenter";

const rootReducer = combineReducers({
    counter,
    momenter,
});

export default rootReducer;