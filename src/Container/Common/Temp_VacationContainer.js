import Test_Vaction from "../../Components/Test/Test_Vaction";
import {useDispatch, useSelector} from "react-redux";
import useActions from "../../library/useActions";
import {
    getEvent,
    getHoliday,
    getVacation,
    monthDecrease,
    monthIncrease,
    yearDecrease,
    yearIncrease
} from "../../modules/momenter";
import {initialize} from "../../modules/newEventCRUD";
import {useEffect} from "react";

function Temp_VacationContainer () {
    const { momentValue, vacation, loadingVacation } = useSelector(state => ({
        momentValue : state.momenter.momentValue,
        vacation : state.momenter.vacation,
        loadingVacation : state.momenter.loading.GET_VACATION
    }))
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
        dispatch(getVacation(momentValue));
    }, [momentValue]);

    return (
        <div style={{marginLeft:"10px"}}>
            <Test_Vaction
                momentValue={momentValue}
                vacation={vacation}
                loading={loadingVacation}
                yearIncreaseButton={yearIncreaseButton}
                yearDecreaseButton={yearDecreaseButton}
                monthIncreaseButton={monthIncreaseButton}
                monthDecreaseButton={monthDecreaseButton}
            />
        </div>

    )
}

export default Temp_VacationContainer;