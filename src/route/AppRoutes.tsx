import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Flights from "../pages/Flights";
import Booking from "../pages/Booking";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
