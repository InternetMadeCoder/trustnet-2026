import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import AboutConference from "./components/about-conference/AboutConference";
import ContactPage from "./components/contact/ContactPage";
import CallForPaper from "./components/call-for-paper/CallForPaper";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/location") {
      navigate("/", { state: { scrollToLocation: true } });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutconference" element={<AboutConference />} />
          <Route path="/cfp" element={<CallForPaper />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route
            path="/committees"
            element={<div className="p-4">Committees Page</div>}
          />
          <Route
            path="/registration"
            element={<div className="p-4">Registration Page</div>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
