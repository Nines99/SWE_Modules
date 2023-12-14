import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Weapons from "../pages/Weapons";
import Agents from "../pages/Agents";
import Theme from "../pages/Theme";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage";
// import MyAccountPage from "../pages/MyAccountPage";
// import TripDetails from "../components/TripDetails";
// import TripsList from "../components/TripsList";


function AppRoutes (props) {
  return (
    <Routes>

      <Route index element={<Home {...props} />} />
      <Route path="/SignIn" element={<SignIn {...props} />} />
      <Route path="/Weapons" element={<Weapons {...props} />} />
      <Route path="/Agents" element={<Agents {...props} />} />
      <Route path="/Theme" element={<Theme {...props} />} />


    </Routes>
  );
}
export default AppRoutes;
