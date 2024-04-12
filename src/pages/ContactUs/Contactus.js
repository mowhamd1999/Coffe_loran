import React, { useRef, useState } from "react";
import "./Contactus.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Zoom } from "react-toastify";
const Contactus = () => {
  const form = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_y3lya5s", "template_7bgpdvt", form.current, {
        publicKey: "CM7g-qRnf8GOuVEgO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          <ToastContainer />;
          toast.success("پیام شما با موفقیت ارسال شد", {
            theme: "dark",
            position: "top-center",
            autoClose: 3000,
            transition: Zoom,
            rtl: true,
          });
        },
        (error) => {
          <ToastContainer />;
          toast.error("ارسال پیام شما با مشکل مواجه شد لطفا دوباره تلاش کنید", {
            theme: "dark",
            position: "top-center",
            autoClose: 3000,
            transition: Zoom,
            rtl: true,
          });
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contactus">
      <div className="contactus_all">
        <ToastContainer />
        <div className="contact_header">
          <h1>تماس با ما</h1>
        </div>
        <div className="contact_body">
          <div className="contact_form">
            <h2 className="contact_forom_header">پیامی برای ما بگذارید</h2>
            <div className="contact_form_body">
              <form ref={form} onSubmit={submitHandler} className="form">
                <div className="contact_form_input">
                  <label className="form_label">نام و نام خانوادگی *</label>
                  <input
                    className="form_input"
                    type="text"
                    placeholder="محمد رضا لک"
                    required
                    name="user_name"
                  />
                </div>
                <div className="contact_form_input">
                  <label className="form_label">آدرس الکترونیک</label>
                  <input
                    className="form_input"
                    type="text"
                    placeholder="ایمیل"
                    name="user_email"
                  />
                </div>
                <div className="contact_form_input">
                  <label className="form_label">شماره تماس *</label>
                  <input
                    className="form_input"
                    type="text"
                    name="user_number"
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
                    name="message"
                  />
                </div>
                <input className="form_btn" value="ارسال" type="submit" />
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
                <p className="info_p">
                  تهران شهریار شهرک وایین میلاد ۳ پلاک ۲۰
                </p>
              </div>
              <div className="info_content">
                <FaPhoneAlt className="info_icon" />
                <p className="info_p">+1(291) 0991 9695</p>
              </div>
              <div className="info_content">
                <IoMdMail className="info_icon" />
                <p className="info_p">info@mywebsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
