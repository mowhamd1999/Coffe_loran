import React from "react";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="about_container">
        <h1>درباره ما</h1>
        <div className="about_head">
          <p>
            Lorem ipsum dolor sit amet, excepturi ducimus fugit, consequuntur
            nemo aspernatur non suscipit? Quis numquam saepe consectetur harum
            voluptates soluta? Sit, praesentium quis soluta fugiat, eveniet
            optio placeat quo esse corrupti sequi alias! Quasi veritatis hic,
            magni accusantium iure sed obcaecati? Dolores adipisci molestias
            reiciendis. Laboriosam ullam est animi quo incidunt id, veritatis
            eaque illo. Reiciendis mollitia tenetur, optio impedit porro ullam
            dolorem beatae? Iure natus quia corporis vel, incidunt neque quos
            ipsa voluptates numquam saepe tempora recusandae tenetur, dolorem ab
            deleniti quisquam. Quas.
          </p>
          <button className="about_btn">تماس با ما</button>
        </div>
        <div className="about_image">
          <img src="/image/coffe_about.jpg" className="about_image_img" />
        </div>
        <div className="about_cards">
          <div className="container_left">
            <div className="overlay">
              <div className="items"></div>
              <div className="items head">
                <p>کافه لوران</p>
                <hr />
              </div>
              <div className="items price">
                <p className="old">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero dolorem harum corrupti iure, consectetur cum, veritatis illum perferendis vel beatae nam voluptatibus ut sed laborum nisi ab? Animi, provident.</p>
              </div>
            </div>
          </div>
          <div className="container_mid">
            <div className="overlay">
              <div className="items"></div>
              <div className="items head">
                <h2>محمد رضا لک</h2>
                <hr />
              </div>
              <div className="items price">
                <p className="old">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto, corporis accusantium adipisci dignissimos illo temporibus, fuga a, earum numquam aut. Officiis consectetur delectus blanditiis consequatur perferendis mollitia a quidem. Nemo, minus! Ipsam consequuntur eveniet nemo voluptas quam aliquid blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="container_right">
            <div className="overlay">
              <div className="items"></div>
              <div className="items head">
                <p>قهوه لوران</p>
                <hr />
              </div>
              <div className="items price">
                <p className="old">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti a consectetur voluptatum architecto maxime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
