import React from "react";
import styles from "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>Michie Willman | Web Developer</h1>
      <Navbar />
    </header>
  );
}

export default Header;
