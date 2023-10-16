import React from "react";
import styles from "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Footer style={styles.Footer} className="Footer">
      <ul id="footerList">
        <Link to="http://github.com/michiewillman">GitHub</Link>
        <Link to="http://www.linkedin.com/in/michiewillman/">LinkedIn</Link>
        <Link to="http://www.michiewillman.com/">Wordpress Portfolio</Link>
      </ul>
      <p>Copyright 2023 Michie Willman</p>
    </Footer>
  );
}

export default Footer;
