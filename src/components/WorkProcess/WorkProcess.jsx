import React from "react";
import { work_process } from "../../constants/data";
import "./WorkProcess.css";
import { motion } from "framer-motion";
const WorkProcess = () => {
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="workprocess section-p bg-white"
      id="workprocess"
    >
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <motion.h3 variants={textAnimation} className="text-brown">
              working <span className="text-dark">process</span>
            </motion.h3>
            <motion.p variants={textAnimation} custom={1} className="text">
              I offer the right solutions for your digital business.
            </motion.p>
          </div>

          <div className="workprocess-list grid">
            {work_process.map((workprocess, index) => {
              return (
                <motion.div
                  variants={textAnimation}
                  custom={index + 1}
                  className="workprocess-item text-center"
                  key={index}
                >
                  <div className="workprocess-item-title flex">
                    <span className="text-brown fw-7">0 {index + 1}</span>
                    <h3 className="text-dark fw-5">{workprocess.title}</h3>
                  </div>
                  <p className="text">{workprocess.paragraph}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkProcess;
