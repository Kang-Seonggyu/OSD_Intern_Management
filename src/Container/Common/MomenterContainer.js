import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {monthDecrease, monthIncrease, yearDecrease, yearIncrease} from "../../modules/momenter";
import Momenter from "../../Components/Common/Momenter";

function MomenterContainer () {
    const { year, month  } = useSelector(state => ({
        year : state.momenter.year,
        month : state.momenter.month
    }));

    const dispatch = useDispatch();

    const yearIncreaseButton = () => dispatch(yearIncrease());
    const yearDecreaseButton = () => dispatch(yearDecrease());
    const monthIncreaseButton = () => dispatch(monthIncrease());
    const monthDecreaseButton = () => dispatch(monthDecrease());

    return (
        <Momenter
            year={year}
            month={month}
            yearIncreaseButton={yearIncreaseButton}
            yearDecreaseButton={yearDecreaseButton}
            monthIncreaseButton={monthIncreaseButton}
            monthDecreaseButton={monthDecreaseButton}
        />
    )
}

export default MomenterContainer;