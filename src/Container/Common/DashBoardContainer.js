import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import HolidayList from "../../Components/Calendar/Holiday";
import Holiday from "../../Components/Calendar/Holiday";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    const CalendarControl = ({ CalcType, amount }) => {

    }

    return (
        <>
            <DASHBOARD onClick={CalendarClick}/>
            <Holiday />
        </>
    )
}

export default DashboardContainer;