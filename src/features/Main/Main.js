import React, { useState, useEffect } from "react";
import "./Main.css";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";
import { PiShootingStar } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import Courseler from "../../components/Courseler/Courseler";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import CardProducts from "../../components/CardProducts/CardProducts";
import { FaCoffee } from "react-icons/fa";
const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  // const data = new Set(products.map(item => item.category))
  const newProducts = products.reduce((acc, cur) => {
    return acc.find((item) => item.category == cur.category)
      ? [...acc]
      : [...acc, cur];
  }, []);
  console.log(newProducts);
  const cardseller = products.filter((item) => item.category === "Toys");
  // console.log(data)
  return (
    <div className="main_container">
      {/* <div className="main_header">
        <div className="header_left">
          <h1 className="header_left_title">کافه لوران</h1>
          <h4 className="header_left_body">
            بهترین قهوه در انتظار شماست
          </h4>
          <div className="header_btn">
            <button className="header_left_btn">کافه لوران</button>
          </div>
        </div>
      <div className="header_image">
        <img className="image_header" src="image/mohammad-headerr.jpg" />
      </div>
      </div> */}
      {/* <Courseler /> */}
      <img className="main_image_image" src="/image/main.jpg" alt="" />
      <br />
      <div className="center">
        <div className="main_card_title">
          <FaCoffee className="main_card_icon" />
          <p className="main_cards_title">دسته بندی ها</p>
        </div>
        <div className="main_products">
          {newProducts.map((item) => (
            <Link
              className="main_link_product"
              to={`/category/${item.category}`}
            >
              <div
                className="products_image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className="product_category">{item.category}</p>
                <p className="product_info">{item.info}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="center">
        <div className="main_favorite">
          <div className="favorite_icon">
            <PiShootingStar />
          </div>
          <div className="favorite_text">
            <p>محبوب ترین ها</p>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="main_favorite_logo">
          <Swiper
            slidesPerView={10}
            spaceBetween={1}
            
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              "@1": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@2": {
                slidesPerView: 5,
                spaceBetween: 75,
              },
              "@2.50": {
                slidesPerView: 6,
                spaceBetween: 100,
              },
              "@2.50": {
                slidesPerView: 7,
                spaceBetween: 100,
              },
              "@2.50": {
                slidesPerView: 8,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/Brandt.png"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/chord-company.svg"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/coffee-day.svg"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/coffee-golden.png"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/Blanchard.png"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/coffee-turkish.webp"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/Logo_Gray.png"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/deathwish-logo.png"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="favorite_image_link">
                <img
                  className="favorite_logo"
                  src="/image/quality.svg"
                  alt="Brandt"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="center">
        <div className="main_card_title">
          <FaCoffee className="main_card_icon" />
          <p className="main_cards_title">پرفروش ترین ها</p>
        </div>
        <div className="main_card_body">
          {cardseller.map((item) => (
            <CardProducts {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
