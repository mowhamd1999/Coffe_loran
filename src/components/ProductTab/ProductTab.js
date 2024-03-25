import React from "react";
import "./ProductTab.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const ProductTab = (props) => {
  console.log(props[0].info);
  const data = props[0]
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab className="tab_head" eventKey="home" title="توضیحات">
          <div className="tab_body">
            <h1>{data.name}</h1>
            <h4 className="tab_body_body">{data.body}</h4>
          </div>
        </Tab>
        <Tab className="tab_head" eventKey="profile" title="توضیحات تکمیلی">
          <div className="tab_body">
            <div className="tab_body_info" >
              <span className="tab_span">وزن</span>
              <p className="tab_p">{data.info}</p>
            </div>
            <div className="tab_body_info" >
              <span className="tab_span">وزن</span>
              <p className="tab_p">{data.id}</p>
            </div>
            <div className="tab_body_info" >
              <span className="tab_span">وزن</span>
              <p className="tab_p">{data.country}</p>
            </div>
            <div className="tab_body_info" >
              <span className="tab_span">وزن</span>
              <p className="tab_p">{data.category}</p>
            </div>
            <div className="tab_body_info" >
              <span className="tab_span">وزن</span>
              <p className="tab_p">۲۵۰ گرم</p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductTab;
