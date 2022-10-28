import { combineReducers } from 'redux';
import {all} from 'redux-saga/effects'
import counter from './counter';
import momenter from "./momenter";
import loading from "./loading";
import newEventCRUD, {writeSaga} from "./newEventCRUD"

const rootReducer = combineReducers({
    counter,
    loading,
    momenter,
    newEventCRUD
});

export function* rootSaga() {
    yield all([writeSaga()]);
}

export default rootReducer;