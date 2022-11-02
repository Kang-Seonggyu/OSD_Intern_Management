import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes,} from "../library/createRequestSaga";
import * as CalendarAPI from "../library/CalendarAPI"
import { takeLatest } from "redux-saga/effects";

const CHANGE_FIELD = 'newEventCRUD/CHANGE_FILED';
const INITIALIZE = 'newEventCRUD/INITIALIZE';
const SELECT_ID = 'newEventCRUD/SELECT_ID';

const [
    NEW_EVENT_WRITE,
    NEW_EVENT_WRITE_SUCCESS,
    NEW_EVENT_WRITE_FAILURE,
] = createRequestActionTypes('newEventCRUD/NEW_EVENT_WRITE');
const [
    NEW_EVENT_UPDATE,
    NEW_EVENT_UPDATE_SUCCESS,
    NEW_EVENT_UPDATE_FAILURE,
] = createRequestActionTypes('newEventCRUD/NEW_EVENT_UPDATE');
const [
    NEW_EVENT_DELETE,
    NEW_EVENT_DELETE_SUCCESS,
    NEW_EVENT_DELETE_FAILURE,
] = createRequestActionTypes('newEventCRUD/NEW_EVENT_DELETE');

// 액션 생성 함수 만들기
// export const writeNewEvent = ({title, category, startDate, endDate}) => ({ type : NEW_EVENT_WRITE, title, category, startDate, endDate})
// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({ key, value, }));
export const initialize = () => ({ type : INITIALIZE});
export const changeField = ({_key, _value}) => ({ type : CHANGE_FIELD, _key, _value });
export const selectID = _id => ({ type : SELECT_ID, _id});

export const newEventDBWrite = createAction(NEW_EVENT_WRITE,form => form);
export const newEventDBDelete = createAction(NEW_EVENT_DELETE, _id => _id);
export const newEventDBUpdate = createAction(NEW_EVENT_UPDATE, form => form);

// 사가 생성
const newEventWriteSaga = createRequestSaga(NEW_EVENT_WRITE, CalendarAPI.addNewEvent);
const newEventDeleteSaga = createRequestSaga(NEW_EVENT_DELETE, CalendarAPI.deleteNewEvent);
const newEventUpdateSaga = createRequestSaga(NEW_EVENT_UPDATE, CalendarAPI.updateNewEvent);
export function* writeSaga() {
    yield takeLatest(NEW_EVENT_WRITE,newEventWriteSaga);
    yield takeLatest(NEW_EVENT_DELETE,newEventDeleteSaga);
    yield takeLatest(NEW_EVENT_UPDATE,newEventUpdateSaga);
}

const initialState = {
    newEventData : {
        title : '',
        category : '',
        startDate : '',
        endDate : ''
    },
    loading : false,
    post: null,
    postError: null,
    postID: 0,
};


export default function newEventCRUD (state = initialState, action) {
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
        case SELECT_ID :
            return {
                ...state,
                postID: action._id
            }

        case NEW_EVENT_WRITE :
            return {
                    ...state,
                    newEventData : action.payload,
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
        case NEW_EVENT_UPDATE :
            return {
                ...state,
                newEventData : action.payload,
                post : null,
                postError: null,
            }
        case NEW_EVENT_UPDATE_SUCCESS :
            return {
                ...state,
                post : action.payload,
            }
        case NEW_EVENT_UPDATE_FAILURE :
            return {
                ...state,
                postError: action.payload,
            }

        case NEW_EVENT_DELETE_SUCCESS :
            return {
                ...state,
                post : action.payload,
            }
        case NEW_EVENT_DELETE_FAILURE :
            return {
                ...state,
                postError: action.payload,
            }
        default:
            return state;
    }
}
// 다른 방식으로 쓴 코드
// const newEventCRUD = handleActions(
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
// export default newEventCRUD;