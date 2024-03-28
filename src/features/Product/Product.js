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
import { addProduct } from "../../redux/ReduxShop/Reducer";

import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsPending(true);
    const fetchAPI = () => {
      getProducts().then((res) => {
        setIsPending(false);
        setProducts(res);
      });
    };
    fetchAPI();
  }, []);
  ///
  const [isPending, setIsPending] = useState(true);
  const data = useParams();
  const product = products.find((item) => item.id === data.id);
  const datas = [products.find((item) => item.category == product.category)];
  const cart = useSelector((state) => state.productsState);
  ///
  const dispatch = useDispatch();
  console.log(cart);
  const [counter, setCounter] = useState(1);

  if (isPending) return <h1>loading ...</h1>;
  ///
  return (
    <div className="product">
      <div className="product_container" key={product.id}>
        <div className="product_head">
          <div className="product_head_img">
            <img className="product_head_image" src={product.image} />
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
                  to={`/category/${product.category}`}
                >
                  <li>&nbsp; / &nbsp;{product.category}</li>
                </Link>
              </ul>
            </div>
            <div className="product_head_names">
              <h2>{product.name}</h2>
            </div>
            <hr style={{ margin: "0px 20px 0px 20px" }} />
            <div className="product_head_price">
              <h4>{product.price} تومان</h4>
            </div>
            <div className="product_head_available">
              {product.isAvailable === true && (
                <p className="isAvailable">موجود</p>
              )}
              {!product.isAvailable && <p className="isAvailable">ناموجود</p>}
            </div>
            <div className="product_head_buy">
              <div className="product_buy_handler">
                <button
                  className="product_handler_btn"
                  onClick={() => setCounter((prevState) => prevState - 1)}
                >
                  -
                </button>
                <span className="product_handler_counter">{counter}</span>
                <button
                  className="product_handler_btn"
                  onClick={() => setCounter((prevState) => prevState + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="buy_btn"
                value={product}
                onClick={() => dispatch(addProduct({ counter, data: product }))}
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
              <CardProducts {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
