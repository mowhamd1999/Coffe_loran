import React, { useState, useEffect } from "react";
import SocialMedia from "../../components/Socialmedia/SocialMedia";
import "./Footer.css";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";
const Footer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <img className="brand_img" src="/image/logo.png" alt="کاقه لوران" />
          <h3>کافه لوران</h3>
          <p>بهترین قهوه در انتظار شماست</p>
          <SocialMedia />
        </div>
        <div className="footer_links">
          <h4>لینک های مفید</h4>
          <ul className="footer_link">
            <Link className="link">
              <li className="footer_link_li">خرید قهوه ترک</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید قهوه فوری</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید قهوه اسپرسو</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید موکاپات</li>
            </Link>
          </ul>
        </div>
        <div className="footer_links">
          <h4>لینک های مفید</h4>
          <ul className="footer_link">
            <Link className="link">
              <li className="footer_link_li">خرید قهوه ترک</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید قهوه فوری</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید قهوه اسپرسو</li>
            </Link>
            <Link className="link">
              <li className="footer_link_li">خرید موکاپات</li>
            </Link>
          </ul>
        </div>
        <div className="enamad">
          <img className="enamad_img" src="image/enamad.png" alt="e-namad" />
        </div>
      </div>
      <div className="footer_last">
        <h6>کلیه حقوق این سایت متعلق به کافه لوران می باشد.</h6>
        <h6>Copyright 2024 © Coffee Luran All rights reserved</h6>
        <p>Made By Love and FriendShip</p>
      </div>
    </div>
  );
};

export default Footer;
