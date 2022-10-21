import React, {useState} from 'react';
import AddNewEvent from "../../Components/Calendar/AddNewEvent";
import HolidayList from "../../Components/Calendar/Holiday";
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from "../../Components/modules/counter";
import Counter from "../../Components/Common/Counter";
import TestComp from "../../Components/Common/TestComp";

function TestContainer(props) {

    // 일정추가 창 보여주것을 정하는 State
    const [NewEvent, setNewEvent] = useState(false);
    // 일정분류 선택지 정보를 담는 State
    const [pickItem, setPickItem] = useState();
    // 카테고리 미선택 확인
    const [NoCategory, setNoCategory] = useState(true);


    const AddEventClick = () => {
        setNewEvent(true);
    };
    const CancelClick = () => {
        setNoCategory(true);
        setNewEvent(false);
        setPickItem(undefined)
    };
    const ConfirmClick = (e) => {
        if(document.getElementById('EventTitle').value == ''){
            e.preventDefault() //제출완료 페이지로 넘어가는 것 방지
            alert('제목을 입력하세요')
        }
        else if(document.getElementById('startDate').value == ''){
            e.preventDefault()
            alert('날짜를 입력하세요')
        }
            // else if(document.getElementById('endDate').value == ''){
            //     e.preventDefault()
            //     alert('날짜를 입력하세요')
        // }
        else {
            setNoCategory(true);
            setNewEvent(false);
            let startDay = document.getElementById('startDate').value;
            //let endDay = document.getElementById('endDate').value;
            let title = document.getElementById('EventTitle').value;

            let selectedDays = document.getElementById(`Date-${startDay}`);
            let new_EventTag = document.createElement('div');
            new_EventTag.setAttribute('class',`${pickItem}`);
            new_EventTag.innerHTML = `${title}`;

            selectedDays.appendChild(new_EventTag)
            setPickItem(undefined)

            //console.log(startDay) 형식 : 2022-10-17 과 같이 나타남
        }

    };
    const SelectItem = () => {
        let selectItem = document.getElementById("EventCategory").value;
        setNoCategory(false);
        setPickItem(selectItem);
    }

    // 리덕스 !!!
    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수들을 만드세요
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    const CalControlClick = () => {
        onSetDiff(diff+1)
        console.log('clicked',diff)
    }


    return (
        <div>
            <TestComp
                AddEventClick={AddEventClick}
                number={number}
                diff={diff}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onSetDiff={onSetDiff}
            />
            <AddNewEvent
                visible={NewEvent}
                onCancel={CancelClick}
                onConfirm={ConfirmClick}
                NoCategory={NoCategory}
                pickItem={pickItem}
                SelectItem={SelectItem}
            />
            <HolidayList />
        </div>
    )
}

export default TestContainer;