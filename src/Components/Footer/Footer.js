import React from "react";
import classes from "./Footer.module.css";
import FB from "../Images/facebook.png";
import LI from "../Images/linkedin.png";
import TW from "../Images/twitter.png";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.contact}>
        <h1>Contact</h1>
        <a className={classes.btn} href="http://ezappsolution.us/">
          Ezappsolution
        </a>
        <h4>Email: support@ezappsolution.us</h4>
        <h4>Phone : (347)217-8839</h4>
      </div>
      <div className={classes.connectWithUs}>
        <p>Connect with us</p>
        <a href="">
          <img src={FB} alt="FB" />
        </a>
        <a href="https://mobile.twitter.com/SolutionEzapp">
          <img src={LI} alt="LI" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-s-155003163/">
          <img src={TW} alt="TW" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
