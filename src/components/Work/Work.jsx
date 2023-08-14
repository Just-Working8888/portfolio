import React, {  useState } from "react";
import { works } from "../../constants/data";
import "./Work.css";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";
const Work = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (src) => {
    setImageModal(true);
    setImageSource(src);
  };

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
      viewport={{ amount: 0.2,once: true }}
      className="work section-p bg-grey"
      id="Works"
    >
      <div
        onClick={() => setImageModal(false)}
        className={imageModal ? "image-box show-image-box" : "image-box"}
      >
        <div className="image-box-content">
          <img onClick={(e) => e.stopPropagation()} src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>

      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <motion.h3 variants={textAnimation} className="text-brown">
              latest <span className="text-dark">works</span>
            </motion.h3>
            <motion.p variants={textAnimation} custom={1} className="text">
              I offer the right solutions for your digital business.
            </motion.p>
          </div>

          <div className="work-list grid">
            {works.map((work, index) => {
              return (
                <motion.div
                  variants={textAnimation}
                  custom={index + 1}
                  className="work-item text-center"
                  key={index}
                  onClick={() => setImageOnModal(work.image)}
                >
                  <img src={work.image} alt="" />
                  <span className="work-item-icon">
                    <BsPlusLg size={38} className="text-brown" />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
