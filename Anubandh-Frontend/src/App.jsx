import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";
import EventPage from "./pages/EventPage";
import JobPortalHomePage from "./pages/JobPortal/JPHomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
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
