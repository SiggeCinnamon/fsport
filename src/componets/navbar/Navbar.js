import style from "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/lobby">
          Lobby
        </Link>
        <Link className="navbar-brand" to="/account">
          Account
        </Link>
        <Link className="navbar-brand" to="/messages">
          Messages
        </Link>
      </nav>
    </>
  );
};
export default NavBar;
