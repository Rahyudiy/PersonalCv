import { Link } from "react-router-dom";
import React from "react";
import "./cvku.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/PersonalCv">
              <h1>Personal Cv</h1>
            </Link>
          </li>
          <li>
            <Link to="/porto">
              <h1>Portofolio</h1>
            </Link>
          </li>
          <li>
            <Link to="/comm">
              <h1>Comment</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
