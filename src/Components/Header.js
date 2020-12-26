import React from "react";
import { NavLink } from "react-router-dom";

import "./headerStyles.css";

const Header = (props) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Items</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({props.sum})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
