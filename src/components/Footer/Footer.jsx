import React from "react";
import "./Footer.css";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  const imageAnimation = {
    hidden: {
      y: -100,
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
      className="footer bg-dark section-p"
      id="footer"
    >
      <div className="container">
        <div className="section-title">
          <motion.h3 variants={imageAnimation} className="text-brown">
            Follow <span className="text-white">Me</span>
          </motion.h3>
        </div>
        <div className="footer-content">
          <ul className="footer-social-links flex flex-c">
            <motion.li variants={imageAnimation} custom={1}>
              <a href="https://t.me/Bekbolot_dev_ops" className="text-white">
                <FaTelegram />
              </a>
            </motion.li>

            {/* <li>
                        <a href = "/" className='text-white'>
                            <FaTwitter />
                        </a>
                    </li> */}
            <motion.li variants={imageAnimation} custom={2}>
              <a
                href="https://www.instagram.com/_za1rbekovv/"
                className="text-white"
              >
                <FaInstagram />
              </a>
            </motion.li>
            <motion.li variants={imageAnimation} custom={3}>
         
                +996 772 21 84 66
            
            </motion.li>
            {/* <li>
                        <a href = "/" className='text-white'>
                            <FaPinterest />
                        </a>
                    </li> */}
            {/* <li>
                        <a href = "/" className='text-white'>
                            <FaBehance />
                        </a>
                    </li> */}
          </ul>
          <p className="text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text">
            All Rights Reserved &copy; 2022
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
