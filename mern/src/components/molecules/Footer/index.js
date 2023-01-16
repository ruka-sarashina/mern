import React from "react";
import {
  ICNDiscord,
  ICNFacebook,
  ICNGithub,
  ICNInstagram,
  ICNLogo
} from "../../../assets";
import './footer.scss';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img  className="logo" src={ICNLogo } alt="logo"/>
        </div>
        <div className="social-wrapper">
          <Icon img={ICNDiscord } />
          <Icon img={ICNFacebook } />
          <Icon img={ICNGithub } />
          <Icon img={ICNInstagram } />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
