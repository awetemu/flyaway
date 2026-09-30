import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/flights">Flights</Link>
      {" | "}
      <Link to="/booking">Booking</Link>
    </nav>
  );
}

export default Navbar;