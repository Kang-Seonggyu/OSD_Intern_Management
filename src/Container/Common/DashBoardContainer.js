import React, {useState, useEffect} from "react";
import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {
    yearIncrease,
    yearDecrease,
    monthDecrease,
    monthIncrease, getEvent,
} from "../../modules/momenter";
import { getHoliday } from "../../modules/momenter";
import useActions from "../../library/useActions";
import moment from "moment/moment";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    const { momentValue, holiday, events, loadingHoliday, loadingEvents } = useSelector(state => ({
        momentValue : state.momenter.momentValue,
        holiday: state.momenter.holiday,
        loadingHoliday: state.momenter.loading.GET_HOLIDAY,
        events : state.momenter.event,
        loadingEvents : state.momenter.loading.GET_EVENT,
    }));

    const dispatch = useDispatch();

    const [
        yearIncreaseButton,
        yearDecreaseButton,
        monthIncreaseButton,
        monthDecreaseButton,
    ] = useActions(
        [
            yearIncrease,
            yearDecrease,
            monthIncrease,
            monthDecrease,
        ],[]
    );

    useEffect(() => {
        dispatch(getHoliday(momentValue));
        dispatch(getEvent(momentValue));
    }, [momentValue]);


    ////////////// 이벤트리스트 처리 구간 /////////////////////////////////////////////////
    /// 받아온 이벤트 리스트 시작날짜 종료날짜를 풀어줌. ///
    const [newEventList, setNewEventList] = useState([])

    useEffect( () => {
        setNewEventList(spreadEventList(events))
    }, [events])
    let spreadEventList = ( EventList ) => {
        const newEventList = [];
        if (!loadingEvents && EventList) {
            EventList.map((oneEvent) => {
                let currentDate = moment(oneEvent.cal_start_day);
                let stopDate = moment(oneEvent.cal_end_day);
                while (currentDate <= stopDate) {
                    newEventList.push({
                        title : oneEvent.cal_title,
                        category : oneEvent.cal_category,
                        date : moment(currentDate).format('YYYY-MM-DD'),
                        inputKey : oneEvent.cal_index
                    })
                    currentDate = moment(currentDate).add(1, "days");
                }
            })
        }

        return newEventList
    }

    return (
        <>
            <DASHBOARD
                onClick={CalendarClick}
                momentValue={momentValue}
                yearIncreaseButton={yearIncreaseButton}
                yearDecreaseButton={yearDecreaseButton}
                monthIncreaseButton={monthIncreaseButton}
                monthDecreaseButton={monthDecreaseButton}
                loadingHoliday={loadingHoliday}
                Holidays={holiday}
                loadingEvents ={loadingEvents}
                newEventList={newEventList}
            />
        </>
    )
}

export default React.memo(DashboardContainer);