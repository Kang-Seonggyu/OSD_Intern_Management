import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수입니다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
    counter: 0,
    list: []
};

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_HOLIDAY_LIST = 'ADD_HOLIDAY_LIST';


/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성합니다.
const increase = () => ({
    type: INCREASE // 액션 객체에는 type 값이 필수입니다.
});

const decrease = () => ({
    type: DECREASE
});

const addHolidayList = item => ({
    type: ADD_HOLIDAY_LIST,
    item
});

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!

function testReducer(state = initialState, action) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD_HOLIDAY_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

/* 스토어 만들기 */
const store = createStore(testReducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);