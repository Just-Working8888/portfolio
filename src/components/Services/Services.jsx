import React from "react";
import "./Services.css";
import { services } from "../../constants/data";
import { motion } from "framer-motion";
const Services = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const cardAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="services section-p"
      id="test1"
    >
      <div className="container">
        <div className="services-content">
          <div className="section-title">
            <motion.h3 variants={textAnimation} className="text-brown">
              my <span className="text-dark">services</span>
            </motion.h3>
            <motion.p variants={textAnimation} custom={1} className="text">
              I offer the right solutions for your digital business.
            </motion.p>
          </div>

          <div className="services-list grid">
            {services.map((service, index) => {
              return (
                <motion.div
                  variants={cardAnimation}
                  custom={index + 1}
                  className="services-item text-center"
                  key={index}
                >
                  <div className="services-item-img">
                    <img src={service.image} className="mx-auto" alt="" />
                  </div>
                  <div className="services-item-text">
                    <h4 className="fs-22 fw-5 op-08">{service.title}</h4>
                    <p className="text mx-auto">{service.paragraph}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
