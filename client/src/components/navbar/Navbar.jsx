import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const handleRedictLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HCMS Booking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            {!user && (
              <button className="headerBtn" onClick={handleRedictLogin}>
                Sign in / Register
              </button>
            )}
            {user && <button onClick={handleLogout}>Logout</button>}

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
