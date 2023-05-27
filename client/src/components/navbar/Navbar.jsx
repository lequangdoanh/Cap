import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { MdHotelClass } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleRedictLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("room-user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">
            <MdHotelClass />
            Hotel.com
          </span>
        </Link>

        {user ? (
          <div className="wrap-user">
            <p>{user.username}</p>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
            <button onClick={() => navigate("/my-room")}>My room</button>
          </div>
        ) : (
          <>
            <button className="headerBtn" onClick={handleRedictLogin}>
              Sign in / Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
