import React, { useState, useEffect } from "react";
import "./Category.css";
import Sidebar from "./../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import CardProducts from "../../components/CardProducts/CardProducts";
const Category = () => {
  const category = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  const product = products.filter(
    (item) => item.category === category.category
  );

  console.log(`/category/${product.category}/${product.name}`);
  return (
    <div className="category_main">
      <div className="category_header">
        <div className="category_head">
          <h4 className="category_header_header">{category.category}</h4>
          <ul className="breadcrumb">
            <Link className="breadcrumb_link" to="/">
              <li>خانه</li>
            </Link>
            <li>&nbsp; / &nbsp;{category.category}</li>
          </ul>
        </div>
      </div>
      <div className="category">
        <div className="category_container">
          <div className="category_sidebar">
            <h5>دسته بندی های محصولات</h5>
            <Sidebar className="sidebar" {...category} />
          </div>
          <div className="category_body">
            {product.map((item) => (
              <div className="category_posts">
                <CardProducts {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
