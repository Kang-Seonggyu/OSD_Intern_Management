import HeaderContainer from "../Container/Common/HeaderContainer";
import FooterContainer from "../Container/Common/FooterContainer";
import DASHBOARD from "../Components/Dashboard/DASHBOARD";

function DashboardPage () {
    return (
        <div>
            <HeaderContainer />
            <DASHBOARD />
            <FooterContainer />
        </div>
    )
}

export default DashboardPage;