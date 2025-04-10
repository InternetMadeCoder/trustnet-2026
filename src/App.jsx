import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<div className="p-4">Home Page</div>} />
            <Route
              path="/about"
              element={<div className="p-4">About Conference Page</div>}
            />
            <Route path="/cfp" element={<div className="p-4">CFP Page</div>} />
            <Route
              path="/committees"
              element={<div className="p-4">Committees Page</div>}
            />
            <Route
              path="/registration"
              element={<div className="p-4">Registration Page</div>}
            />
            <Route
              path="/contact"
              element={<div className="p-4">Contact Page</div>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
