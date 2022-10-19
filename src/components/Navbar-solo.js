import React from 'react';
import './Navbar.css';
import logo from "../img/reactjs-icon-sm.png";
import { Link } from "react-router-dom";

export function NavBar() {
  return(
    <>
      <nav>
        <img src={logo} alt="react logo" />
        <h3>ReactFacts</h3>
        <Link className="link" to="/">
          <h4>React-Course - Solo Project 1</h4>
        </Link>
      </nav>
    </>
  )
}