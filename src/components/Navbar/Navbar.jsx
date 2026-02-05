import { NavLink } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import pro from "./assets/main-prof.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/home" className="logo">
          ALPHA-FLIX
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/home" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tvshows">TV Shows</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/newpop">New & Popular</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="icon-btn" title="Search">
          <FaSearch />
        </button>

        <NavLink to="/subscribe" className="subscribe-btn">
          <FaBell />
          <span>Subscribe</span>
        </NavLink>

        <NavLink to="/profile">
          <img src={pro} alt="Profile" className="profile" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
