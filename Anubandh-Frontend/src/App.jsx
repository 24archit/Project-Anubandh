import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { verifyToken } from "./apis/authApi";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";
import EventPage from "./pages/EventPage";
import JobPortalHomePage from "./pages/JobPortal/JPHomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (authToken) {
      const verifyAuthToken = async () => {
        const data = await verifyToken(authToken);
        if (data.success) {
          setIsAuth(true);
        }
      };
      verifyAuthToken();
    }
  }, []);

  return (
    <>
      <Router>
        {isAuth ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/donations" element={<DonationPage />} />
            <Route path="/jobportal" element={<JobPortalHomePage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
