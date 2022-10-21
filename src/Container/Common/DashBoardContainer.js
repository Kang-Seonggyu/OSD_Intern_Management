import DASHBOARD from "../../Components/Dashboard/DASHBOARD";
import {useNavigate} from "react-router-dom";
import CounterContainer from "./CounterContainer";


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
            <CounterContainer />
        </>
    )
}

export default DashboardContainer;