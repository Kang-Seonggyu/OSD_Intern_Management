import InternTable from "./mainBody/InfoTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardWrite from "./mainBody/BoardWriting";

function Body () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InternTable />} />
                <Route path="/board" element={<BoardWrite />} />
            </Routes>
        </Router>
    )
}

export default Body;