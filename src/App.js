import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import CalendarPage from "./Pages/CalendarPage";
import BobfriendPage from "./Pages/BobfriendPage";
import ArrayTestPage from "./Pages/ArrayTestPage";
import VacationPage from "./Pages/VacationPage";


const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/bob" element={<BobfriendPage />} />
                    <Route path="/ArrayTest" element={<ArrayTestPage />} />
                    <Route path="/Vacation" element={<VacationPage />} />
                </Routes>
            </Router>
    )
}

export default App;