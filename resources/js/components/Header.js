import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark py-3">
      <nav className="container">
        <NavLink className="h3 text-decoration-none text-white" exact to="/">
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink className="h3 text-decoration-none text-white" to="/sobre">
          Sobre
        </NavLink>
        |{" "}
        <NavLink className="h3 text-decoration-none text-white" to="/usuario">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
