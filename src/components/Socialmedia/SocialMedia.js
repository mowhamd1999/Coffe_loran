import React from "react";
import "./SocialMedia.css";
import { FaTelegramPlane } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
const SocialMedia = () => {
  return (
    <div>
      <div class="social-btns">
        <a class="btn telegram" href="#">
          <i class="fa fa-telegram">
            <FaTelegramPlane className="icon" />
          </i>
        </a>
        <a class="btn whatsapp" href="#">
          <i class="fa fa-whatsapp">
            <SiWhatsapp className="icon" />
          </i>
        </a>
        <a class="btn instagram" href="#">
          <i class="fa fa-instagram">
            <SlSocialInstagram className="icon" />
          </i>
        </a>
        <a class="btn twiter" href="#">
          <i class="fa fa-twiter">
            <CiTwitter className="icon" />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
