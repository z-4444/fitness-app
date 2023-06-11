import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "../shared/components/Navigations/MainHeader.css";
import NewPlace from "../places/pages/NewPlace";
import MainNavigation from "../shared/components/Navigations/MainNavigation";
// import UsersList from "../users/components/usersList";
import Users from "../users/pages/Users";
import UserPlaces from "../places/pages/UserPlaces";
import UpdatePlace from "../places/pages/UpdatePlace";
import Register from "../users/pages/Register";
// import Login from "../users/pages
import Login from "../Pages/Login";
import Overview from "../Pages/Overview";
import Energy from "../Pages/Energy";
import Calendar from "../Pages/Calendar";
import Distance from "../Pages/Distances";
import Profile from "../Pages/Profile";

const NavigationLogic = () => {
  return (
    <Router>
      <MainNavigation />
      <Routes className="main">
        <Route path="/" element={<Overview />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default NavigationLogic;
