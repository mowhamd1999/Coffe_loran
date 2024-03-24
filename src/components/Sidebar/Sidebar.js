import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  var uniqueArray = removeDuplicates(products, "category");
  const coffe = props.category
  console.log(coffe);
  return (
    <div className="sidebar_container">
      {uniqueArray.map((item) => (
        <div className="sidebar_links">
          <Link to={`/category/${item.category}`} className='sidebar_link' >
            <h6 className={`sidebar_links_link  ${coffe === item.category ? 'active' : ''}`}>{item.category}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
