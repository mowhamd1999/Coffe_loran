import React, { useState, useEffect } from "react";
import "./Main.css";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";
import { PiShootingStar } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
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

  // console.log(data)
  return (
    <div className="main_container">
      <div className="main_header">
        <div className="header_left">
          <h1 className="header_left_title">دمی با کافه لوران</h1>
          <h4 className="header_left_body">
            یک جمعه تنهایی ات را به قهوه مهمان می کنم تلخ تلخ
          </h4>
          <div className="header_btn">
            <button className="header_left_btn">کافه لوران</button>
          </div>
        </div>
      </div>
      <br />
      <div className="main_products">
        {newProducts.map((item) => (
          <Link className="main_link_product" to={`/category/${item.category}`}>
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
            slidesPerView={6}
            spaceBetween={-300}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
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
    </div>
  );
};

export default Main;
