import InternTable from "../../NotDefined/InfoTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardWrite from "../../Pages/BoardWriting";
import DASHBOARD from "../../Pages/DASHBOARD";

function BodyContainer () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DASHBOARD />} />
                <Route path="/board" element={<BoardWrite />} />
            </Routes>

        </Router>
    )
}

export default BodyContainer;