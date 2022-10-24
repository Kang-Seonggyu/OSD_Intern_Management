import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { yearIncrease, yearDecrease, monthDecrease, monthIncrease} from "../../Components/modules/momenter";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    const { year, month } = useSelector(state => ({
        year : state.momenter.year,
        month : state.momenter.month
    }));

    const dispatch = useDispatch();

    const yearIncreaseButton = () => dispatch(yearIncrease());
    const yearDecreaseButton = () => dispatch(yearDecrease());
    const monthIncreaseButton = () => dispatch(monthIncrease());
    const monthDecreaseButton = () => dispatch(monthDecrease());

    return (
        <>
            <DASHBOARD
                onClick={CalendarClick}
                year={year}
                month={month}
                yearIncreaseButton={yearIncreaseButton}
                yearDecreaseButton={yearDecreaseButton}
                monthIncreaseButton={monthIncreaseButton}
                monthDecreaseButton={monthDecreaseButton}
            />
        </>
    )
}

export default DashboardContainer;