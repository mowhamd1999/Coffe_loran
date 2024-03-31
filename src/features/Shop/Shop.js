import React, { useEffect, useState } from "react";
import "./Shop.css";
import { useSelector, useDispatch } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { increament, decreament } from "../../redux/ReduxShop/Reducer";
const Shop = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.productsState);
  const data = datas.products;
  const [counter, setCounter] = useState();
    console.log(data)
    const total = data.map(item => item.totalPrice).reduce((a ,b) => a + b)
    console.log(total)
  return (
    <div className="shop">
      <div className="shop_head">
        <h1 className="shop_header">سبد خرید</h1>
      </div>
      <div style={{ width: "100%", display: "ruby-text" }}>
        <div className="shop_body">
          <div className="shop_body_right">
            <table className="table_head">
              <thead
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  borderBottom:"2px solid rgb(214, 214, 214)",
                  paddingBottom:'15px',

                }}
              >
                <tr style={{ width: "40%" }}>محصول</tr>
                <tr>قیمت</tr>
                <tr>تعداد</tr>
                <tr>جمع جزء</tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="shop_items">
                    <div className="shop_item_close">
                      <td style={{ marginLeft: "20px" , width:'5px' }}>
                        <IoIosCloseCircleOutline className="shop_close_item" />
                      </td>
                      <td>
                        <img
                          className="shop_item_image"
                          src={item.productData.image}
                        />
                      </td>
                    </div>
                    <td style={{fontSize:'1rem' , color:'var(--coffe)'}}>{item.productData.name}</td>
                    <td>{item.productData.price} تومان</td>
                    <td>
                      <div className="product_buy_handler">
                        <span className="shop_item_counter">
                          {item.quantity}
                        </span>
                      </div>
                    </td>
                    <td>{item.totalPrice} تومان</td>
                  </tr>
                ))}
                <button className="shop_buy_btm">ادامه خرید</button>
              </tbody>
            </table>
          </div>
          <div className="shop_body_left">
            <div className="shop_body_title">
                <h6 className="shop_title">جمع کل سبد خرید</h6>
            </div>
            <div className="shop_body_total">
                <div className="shop_price">
                    <p>جمع جزء</p>
                    <p style={{fontWeight:'600'}}>{total} تومان</p>
                </div>
                <div className="shop_price_total">
                    <p>جمع جزء</p>
                    <p style={{fontWeight:'600'}}>{total} تومان</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
