import { combineReducers } from 'redux';
import {all} from 'redux-saga/effects'
import counter from './counter';
import momenter from "./momenter";
import loading from "./loading";
import newEventWrite, {writeSaga} from "./newEventWrite"

const rootReducer = combineReducers({
    counter,
    loading,
    momenter,
    newEventWrite
});

export function* rootSaga() {
    yield all([writeSaga()]);
}

export default rootReducer;