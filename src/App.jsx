import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
