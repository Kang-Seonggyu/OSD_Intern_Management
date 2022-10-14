import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import AskModal from "../../Components/Common/AskModal";


function DashboardContainer (props) {
    const navigate = useNavigate();

    const CalendarClick = () => {
        navigate('/calendar');
    };

    return (
        <>
            <DASHBOARD onClick={CalendarClick}/>
            <AskModal visible/>
        </>
    )
}

export default DashboardContainer;