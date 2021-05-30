import style from "./Navbar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav className="navBar">
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
      </Nav>
    </>
  );
};
export default NavBar;
