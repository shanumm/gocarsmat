import React from "react";
// import Carimage from "./car-604019_1920.jpg";
import "../Styles/contact.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <div className="contact-main"></div>
      <Nav />
      <div className="contact-text">
        <div className="contact-location">
          <div className="contact-location-text">Our Location</div>
          <div className="contact-location-box"></div>
        </div>
        <div className="contact-message">
          <div className="contact-message-text">Leave a Message</div>
          <div className="contact-message-line"></div>
          <div className="contact-message-box">
            <div className="contact-message-box1">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="contact-message-box2">
              <label htmlFor="Email">Email</label>
              <input type="Email" placeholder="Email" />
            </div>
            <div className="contact-message-box3">
              <label htmlFor="Phone">Phone</label>
              <input type="Phoneno" placeholder="Phone" />
            </div>
            <div className="contact-message-box4">
              <label htmlFor="Message">Meassage</label>
              <input type="text" placeholder="Message" />
            </div>
            <div className="button">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
