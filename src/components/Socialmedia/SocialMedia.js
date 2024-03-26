import React from "react";
import "./SocialMedia.css";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
const SocialMedia = () => {
  return (
    <div>
      <div className="social-btns">
        <a className="btn telegram" href="#">
          <i className="fa fa-telegram">
            <FaTelegramPlane className="icon" />
          </i>
        </a>
        <a className="btn whatsapp" href="#">
          <i className="fa fa-whatsapp">
            <SiWhatsapp className="icon" />
          </i>
        </a>
        <a className="btn instagram" href="#">
          <i className="fa fa-instagram">
            <SlSocialInstagram className="icon" />
          </i>
        </a>
        <a className="btn twiter" href="#">
          <i className="fa fa-twiter">
            <CiTwitter className="icon" />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
