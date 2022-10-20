import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import Holiday from "../../Components/Calendar/Holiday";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    return (
        <>
            <DASHBOARD onClick={CalendarClick}/>
            <Holiday />
        </>
    )
}

export default DashboardContainer;