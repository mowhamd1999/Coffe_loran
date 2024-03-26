import React from "react";
import "./Contactus.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contactus = () => {
  return (
    <div className="contactus">
      <div className="contactus_all">
        <div className="contact_header">
          <h1>تماس با ما</h1>
        </div>
        <div className="contact_body">
          <div className="contact_form">
            <h2 className="contact_forom_header">پیامی برای ما بگذارید</h2>
            <div className="contact_form_body">
              <form action="submit" className="form">
                <div className="contact_form_input">
                  <label className="form_label">نام و نام خانوادگی *</label>
                  <input
                    className="form_input"
                    type="text"
                    placeholder="محمد رضا لک"
                    required
                    //   onChange={nameHandler}
                    //   value={contact.name}
                    name="name"
                  />
                </div>
                <div className="contact_form_input">
                  <label className="form_label">آدرس الکترونیک</label>
                  <input
                    className="form_input"
                    type="text"
                    placeholder="ایمیل"
                    //   value={contact.email}
                    //   onChange={nameHandler}
                    name="email"
                  />
                </div>
                <div className="contact_form_input">
                  <label className="form_label">شماره تماس *</label>
                  <input
                    className="form_input"
                    type="text"
                    //   value={contact.number}
                    //   onChange={nameHandler}
                    name="number"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  />
                </div>
                <div className="contact_form_textarea">
                  <label className="form_label">پیام شما *</label>
                  <textarea
                    className="form_textarea"
                    type=""
                    placeholder="پیام را در این فیلد بنویسید"
                    required
                    //   value={contact.message}
                    //   onChange={nameHandler}
                    name="message"
                  />
                </div>
                <button
                  className="form_btn"
                  type="submit"
                  // onClick={submitHandler}
                >
                 ارسال
                </button>
              </form>
            </div>
          </div>
          <div className="contact_info">
            <div className="contact_info_body">
              <h2 className="contact_info_title">اطلاعات تماس</h2>
              <p className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias eaque, minus ex ab aspernatur harum.
              </p>
              <div className="info_content">
                <FaLocationDot className="info_icon" />
                <p>تهران شهریار شهرک وایین میلاد ۳ پلاک ۲۰</p>
              </div>
              <div className="info_content">
                <FaPhoneAlt className="info_icon" />
                <p>+1(291) 0991 9695</p>
              </div>
              <div className="info_content">
                <IoMdMail className="info_icon" />
                <p>info@mywebsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
