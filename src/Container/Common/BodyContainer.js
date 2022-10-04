import InternTable from "../../NotDefined/InfoTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardWrite from "../../Pages/BoardWriting";
import DASHBOARD from "../../Pages/DASHBOARD";

function BodyContainer () {
    return (
        <div className="BodyContainer" id="BodyContainer">
            <Router>
                <Routes>
                    <Route path="/" element={<DASHBOARD />} />
                    <Route path="/board" element={<BoardWrite />} />
                </Routes>

            </Router>
        </div>
    )
}

export default BodyContainer;