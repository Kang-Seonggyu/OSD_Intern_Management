import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes,} from "../library/createRequestSaga";
import * as CalendarAPI from "../library/CalendarAPI"
import { takeLatest } from "redux-saga/effects";

const CHANGE_FIELD = 'newEventWrite/CHANGE_FILED';
const INITIALIZE = 'newEventWrite/INITIALIZE';
const [
    NEW_EVENT_WRITE,
    NEW_EVENT_WRITE_SUCCESS,
    NEW_EVENT_WRITE_FAILURE,
] = createRequestActionTypes('newEventWrite/NEW_EVENT_WRITE');

export const initialize = () => ({ type : INITIALIZE});
export const changeField = ({_key, _value}) => ({ type : CHANGE_FIELD, _key, _value })

// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({ key, value, }));
export const writeNewEvent = createAction(NEW_EVENT_WRITE, ({title, category, startDate, endDate}) => ({title, category, startDate, endDate}));

// 사가 생성
const newEventWriteSaga = createRequestSaga(NEW_EVENT_WRITE, CalendarAPI.addNewEvent);
export function* writeSaga() {
    yield takeLatest(NEW_EVENT_WRITE,newEventWriteSaga);
}

const initialState = {
    newEventData : {
        title : '',
        category : '',
        startDate : '',
        endDate : ''
    },
    post: null,
    postError: null,
};

// 다른 방식으로 쓴 코드
export default function newEventWrite (state = initialState, action) {
    switch (action.type) {
        case CHANGE_FIELD :
            return  {
                ...state,
                newEventData: {
                    ...state.newEventData,
                    [action._key] : action._value
                }
            }

        case INITIALIZE :
            return {
                ...state,
                newEventData: initialState.newEventData
            }
        case NEW_EVENT_WRITE :
            return {
                    ...state,
                    post : null,
                    postError: null,
                }
        case NEW_EVENT_WRITE_SUCCESS :
            return {
                ...state,
                post : action.payload,
            }
        case NEW_EVENT_WRITE_FAILURE :
            return {
                ...state,
                postError: action.payload,
            }
        default:
            return state;
    }
}

// const newEventWrite = handleActions(
//     {
//         [INITIALIZE] : state => initialState,
//         [CHANGE_FIELD] : (state, {payload : {key, value} }) => ({
//             ...state,
//             newEventData: {
//                 ...state.newEventData,
//                 [key] : value, // 특정 key 값 업데이트
//             }
//
//         }),
//         [NEW_EVENT_WRITE] : state => ({
//             ...state,
//             post : null,
//             postError: null,
//         }),
//         [NEW_EVENT_WRITE_SUCCESS] : (state, {payload : post}) => ({
//             ...state,
//             post,
//         }),
//         [NEW_EVENT_WRITE_FAILURE] : (state, {payload : postError}) => ({
//             ...state,
//             postError,
//         }),
//     },
//     initialState,
// );
//
// export default newEventWrite;