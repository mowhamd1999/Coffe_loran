import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { getProducts } from "../../services/api";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuSendToBack } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import ProductTab from "../../components/ProductTab/ProductTab";
import CardProducts from "./../../components/CardProducts/CardProducts";
import { addToCard } from "../../redux/ReduxShop/Reducer";
// import { connect, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
///
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  const data = useParams();
  const product = products.filter((item) => item.name === data.name);
  const datas = products.filter((item) => item.category == product[0].category);
  ///
  const dispatch = useDispatch();
  const cart = useSelector(state => state.state);
  console.log(cart)
  const handlerAddToCart =(item) => {
    // console.log(item)
  }
  ///
  return (
    <div className="product">
      {product.map((item) => (
        <div className="product_container" key={item.id}>
          <div className="product_head">
            <div className="product_head_img">
              <img className="product_head_image" src={item.image} alt="" />
            </div>
            <div className="product_head_info" id="main">
              <div className="breadcrumb">
                <ul className="breadcrumb">
                  <Link className="product_breadcrumb_link" to="/">
                    <li>خانه</li>
                  </Link>
                  <li className="product_breadcrumb_link">
                    &nbsp; / &nbsp;فروشگاه
                  </li>
                  <Link
                    className="product_breadcrumb_link"
                    to={`/category/${item.category}`}
                  >
                    <li>&nbsp; / &nbsp;{item.category}</li>
                  </Link>
                </ul>
              </div>
              <div className="product_head_names">
                <h2>{item.name}</h2>
              </div>
              <hr style={{ margin: "0px 20px 0px 20px" }} />
              <div className="product_head_price">
                <h4>{item.price} تومان</h4>
              </div>
              <div className="product_head_available">
                {item.isAvailable === true && (
                  <p className="isAvailable">موجود</p>
                )}
                {!item.isAvailable && <p className="isAvailable">ناموجود</p>}
              </div>
              <div className="product_head_buy">
                <div className="product_buy_handler">
                  <button className="product_handler_btn">-</button>
                  <span className="product_handler_counter">1</span>
                  <button className="product_handler_btn">+</button>
                </div>
                <button
                  className="buy_btn"
                  onClick={() => handlerAddToCart(item)}
                  value={item}
                >
                  افزودن به سبد خرید
                </button>
              </div>
              <hr style={{ margin: "0px 20px 0px 20px" }} />
              <div className="product_head_body">
                <div className="product_body_info">
                  <MdOutlineShoppingCart className="product_body_icon" />
                  <p>
                    &nbsp;&nbsp; خرید به صورت آنلاین و ارسال پستی شرایط ارسال
                    مرسوله
                  </p>
                </div>
                <div className="product_body_info">
                  <LuSendToBack className="product_body_icon" />
                  <p>
                    &nbsp;&nbsp;&nbsp; ارسال مرسوله های بالاتر از 500 هزار تومان
                    فقط در شهر تهران رایگان خواهد بود
                  </p>
                </div>
                <div className="product_body_info">
                  <AiOutlineSafety className="product_body_icon" />
                  <p>
                    &nbsp;&nbsp;&nbsp; خرید آنلاین با استفاده از درگاه های امن{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product_tabs">
            <ProductTab {...product} />
          </div>
          <div className="product_more">
            <h2 className="product_more_title">محصولات مرتبط</h2>
            <div className="product_more">
              {datas.map((item) => (
                <CardProducts {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
