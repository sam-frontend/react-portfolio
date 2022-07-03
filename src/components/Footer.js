import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon/>
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; sam-fullstack.netlify.app 2022 All Right Reserved</p>
    </div>
  );
}

export default Footer;
