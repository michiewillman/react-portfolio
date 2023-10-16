import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.css";

function Navbar() {
  return (
    <div style={styles.navbar} className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Portfolio</Link>
      <Link to="https://github.com/michiewillman">Git</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
