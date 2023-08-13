import React, { useState } from "react";
import "./Newsletter.css";
import { motion } from "framer-motion";
const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const inputAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: false }}
      className="newsletter section-p"
    >
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <motion.h3 variants={textAnimation} className="text-brown">
              subscribe <span className="text-white">to newsletter</span>
            </motion.h3>
          </div>

          <form className="newsletter-form mx-auto" onSubmit={handleSubmit}>
            <div className="form-elem">
              <motion.input
                variants={inputAnimation}
                custom={1}
                type="text"
                value={formData.name}
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                id="name"
              />
            </div>
            <div className="form-elem">
              <motion.input
                variants={textAnimation}
                custom={2}
                type="text"
                value={formData.email}
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                id="email"
              />
            </div>
            <motion.button
              variants={inputAnimation}
              custom={3}
              type="submit"
              className="bg-brown text-white submit-btn fw-3 fs-22"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
