import React, { useState , useEffect } from "react";
import "./Main.css";
import { getProducts } from "../../services/api";
const Main = () => {
  const [products , setProducts] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    }
    fetchAPI()
  }, [])
  
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
        
      </div>
    </div>
  );
};

export default Main;
