import React from "react";
import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {
    yearIncrease,
    yearDecrease,
    monthDecrease,
    monthIncrease,
} from "../../modules/momenter";
import { getHoliday } from "../../modules/momenter";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    const { momentValue, holiday, loadingHoliday } = useSelector(state => ({
        momentValue : state.momenter.momentValue,
        holiday: state.momenter.holiday,
        loadingHoliday: state.momenter.loading.GET_HOLIDAY,
    }));


    const dispatch = useDispatch();

    const yearIncreaseButton = () => dispatch(yearIncrease());
    const yearDecreaseButton = () => dispatch(yearDecrease());
    const monthIncreaseButton = () => dispatch(monthIncrease());
    const monthDecreaseButton = () => dispatch(monthDecrease());

    useEffect(() => {
        dispatch(getHoliday(momentValue));
    }, [momentValue]);

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
            />
        </>
    )
}

export default React.memo(DashboardContainer);