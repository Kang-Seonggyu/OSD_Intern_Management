import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    yearDecrease,
    yearIncrease,
    monthIncrease,
    monthDecrease,
    changeTitle,
    changeCategory,
    setNull, changeStartDate, changeEndDate
} from "../../Components/modules/momenter";
import Calendar from "../../Components/Calendar/Calendar";
import AddNewEvent from "../../Components/Calendar/AddNewEvent";
import {getHoliday} from "../../Components/modules/momenter";

function CalendarContainer(props) {

    ////////////// Redux 구간 /////////////////////////////////////////////////

    const { momentValue, holiday, loadingHoliday, newEventData} = useSelector(state => ({
        momentValue: state.momenter.momentValue,
        holiday: state.momenter.holiday,
        loadingHoliday: state.momenter.loading.GET_HOLIDAY,
        newInput : state.momenter.newInput,
        newEventData : state.momenter.newEventInfo
    }));

    const dispatch = useDispatch();

    const yearIncreaseButton = () => dispatch(yearIncrease());
    const yearDecreaseButton = () => dispatch(yearDecrease());
    const monthIncreaseButton = () => dispatch(monthIncrease());
    const monthDecreaseButton = () => dispatch(monthDecrease());

    const changeE_title = e => dispatch(changeTitle(e.target.value));
    const changeE_category = e => dispatch(changeCategory(e.target.value));
    const changeE_startDate = e => dispatch(changeStartDate(e.target.value));
    const changeE_endDate = e => dispatch(changeEndDate(e.target.value));
    const makeE_setNull = () => dispatch(setNull())

    useEffect(() => {
        dispatch(getHoliday(momentValue));
    }, [momentValue]);

    ////////////////////////////////////////////////////////////////////////////

    // 일정추가 창 보여주것을 정하는 State
    const [NewEvent, setNewEvent] = useState(false);
    // 일정분류 선택지 정보를 담는 State
    const [pickItem, setPickItem] = useState();
    // 카테고리 미선택 확인
    let noPickItem;
    if (newEventData.category === '') {noPickItem=true}
    else {noPickItem=false}

    const [confirm, setConfirm] = useState(false);

    const [input, setInput] = useState({
        eventTitle: '',
        writer: '',
        startDate: '',
        endDate: '',
    })

    const [nEvent, setNEvent] = useState({});


    const { eventTitle, writer, startDate, endDate } = input;

    const onChangeInput = e => {
        const {name, value} = e.target
        const nextInput = {
            ...input,
            [name]: value,
        }
        setInput(nextInput)
    }

    const AddEventClick = () => {
        setNewEvent(true);
    };
    const CancelClick = () => {
        setNewEvent(false);
        setPickItem(undefined)
        makeE_setNull()
    };
    const ConfirmClick = (e) => {
        if(newEventData.title === ''){
            e.preventDefault() //제출완료 페이지로 넘어가는 것 방지
            alert('제목을 입력하세요')
        }
        else if(newEventData.startDate === ''){
            e.preventDefault()
            alert('날짜를 입력하세요')
        }

        else {
            setNewEvent(false);
            setConfirm(true)

            setNEvent(input)


            setPickItem(undefined)
            makeE_setNull()

            //console.log(startDay) 형식 : 2022-10-17 과 같이 나타남
        }

    };

    const onReload = () => {
        window.location.reload();
    }



    return (
        <div>
            <Calendar
                AddEventClick={AddEventClick}
                confirm={confirm}
                startDate={newEventData.startDate}
                onReload={onReload}
                momentValue={momentValue}
                yearIncreaseButton={yearIncreaseButton}
                yearDecreaseButton={yearDecreaseButton}
                monthIncreaseButton={monthIncreaseButton}
                monthDecreaseButton={monthDecreaseButton}
                loadingHoliday={loadingHoliday}
                Holidays={holiday}
                newEventData={newEventData}
                changeE_title={changeE_title}
                changeE_category={changeE_category}
            />
            <AddNewEvent
                visible={NewEvent}
                onCancel={CancelClick}
                onConfirm={ConfirmClick}
                eventTitle={eventTitle}
                writer={writer}
                startDate={startDate}
                endDate={endDate}
                newEventData={newEventData}
                noPickItem={noPickItem}
                changeE_title={changeE_title}
                changeE_category={changeE_category}
                changeE_startDate={changeE_startDate}
                changeE_endDate={changeE_endDate}
            />
        </div>
    );
}

export default CalendarContainer;