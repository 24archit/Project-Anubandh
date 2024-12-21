import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";
import EventPage from "./pages/EventPage";
import JobPortalHomePage from "./pages/JobPortal/JobPortalHomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/jobportal" element={<JobPortalHomePage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
