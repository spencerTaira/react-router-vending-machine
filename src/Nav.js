import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const links = ["soda", "sardines", "chips"];

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        {links.map(l => (
          <li>
            <Link to={`/snack/${l}`}>
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;