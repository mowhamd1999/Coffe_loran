import React from "react";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.productsState);
  const productLenght = cart.products.length;
  // console.log(productLenght)
  return (
    <div className="header_container">
      <div className="header_navbar">
        <div className="navbar_menu">
          <ul className="navbar_ul">
            <li className="navbar_li">
              <Link to="/">
                <img className="navbar_logo" src="/image/logo.png" />
              </Link>
            </li>
            <li className="navbar_li">
              <a className="navbar_title">
                محصولات <IoIosArrowDown className="navbar_icon" />
              </a>
              <ul className="ul">
                <div className="menu">
                  <div className="menus">
                    <li>
                      <a className="menus_title">قهوه</a>
                    </li>
                    <li>
                      <a className="menus_body">خرید قهوه ترک</a>
                    </li>
                    <li>
                      <a className="menus_body">خرید قهوه اسپرسو و دمی</a>
                    </li>
                    <li>
                      <a className="menus_body">خرید قهوه فوری</a>
                    </li>
                    <li>
                      <a className="menus_body">
                        خرید هورکا (کافه، رستوران، هتل)
                      </a>
                    </li>
                  </div>
                  <div className="menus">
                    <li>
                      <a className="menus_title">ابزار تهیه قهوه</a>
                    </li>
                    <li>
                      <a className="menus_body">دستگاهای دمی آوری</a>
                    </li>
                    <li>
                      <a className="menus_body">اسپرسوساز خانگی</a>
                    </li>
                    <li>
                      <a className="menus_body">فرنچ پرس</a>
                    </li>
                    <li>
                      <a className="menus_body">موکاپات</a>
                    </li>
                    <li>
                      <a className="menus_body">لوازم جانبی</a>
                    </li>
                  </div>
                  <div className="menus">
                    <li>
                      <a className="menus_title">ابزارهای سرو قهوه</a>
                    </li>
                    <li>
                      <a className="menus_body">ماگ</a>
                    </li>
                    <li>
                      <a className="menus_body">تراول ماگ</a>
                    </li>
                    <li>
                      <a className="menus_body">فنجان قهوه خوری</a>
                    </li>
                  </div>
                  <div className="menus">
                    <li>
                      <a className="menus_title">خرید شکلات</a>
                    </li>
                    <li>
                      <a className="menus_body">پودرهای ترکبی</a>
                    </li>
                    <li>
                      <a className="menus_body">هات چاکلت</a>
                    </li>
                    <li>
                      <a className="menus_body">چای ماسالا</a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="navbar_li">
              <Link className="link" to="/about-us">
                <a className="navbar_title">درباره ما</a>
              </Link>
            </li>
            <li className="navbar_li">
              <Link className="link" to="/contact-us">
                <a className="navbar_title">ارتباط با ما</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar_login">
          <ul className="navbar_ul">
            <li className="navbar_title">
              <a> ورود / عضویت</a>
            </li>
            <li className="navbar_title">
              <a>
                <span className="item_shop_lengh">{productLenght}</span>
                <Link to='/shop' className="link" >
                  <FaCartShopping />
                </Link>
              </a>
            </li>
            <li className="navbar_title">
              <a>
                <CiSearch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
