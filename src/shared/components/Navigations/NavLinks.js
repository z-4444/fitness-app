import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  const login = localStorage.getItem("token");
  let routes;
  if (login) {
    routes = (
      <>
        <li>
          <NavLink to="/">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/distances">Distance</NavLink>
        </li>
        <li>
          <NavLink to="/energy">Energy</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </>
    );
  } else {
    routes = (
      <>
        <li>
          <NavLink to="/">ALL USERS</NavLink>
        </li>
        <li>
          <NavLink to="/users/auth">AUTHENTICATE</NavLink>
        </li>
      </>
    );
  }
  return <ul className="nav-links">{routes}</ul>;
};

export default NavLinks;
