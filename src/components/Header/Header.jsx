import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll";

const Header = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2},
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="header flex flex-col"
      id="header"
    >
      <Navbar />

      <div className="container flex">
        <div className="header-content">
          <motion.h2
            variants={textAnimation}
            className="text-uppercase text-white op-07 fw-6 ls-2"
          >
            web Front-end, devolper
          </motion.h2>
          <motion.h1
          custom={1}
            variants={textAnimation}
            className="text-white fw-6 header-title"
          >
            Hello, I'm <span className="text-brown">Web - Devolper</span> living
            in Osh, Kyrgistan
          </motion.h1>
          <div className="btn-groups flex">
            <Link
              activeClass="active"
              to="Works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              <motion.button   variants={textAnimation} custom={1} type="button" className="btn-item bg-brown fw-4 ls-2">
                See Works
              </motion.button>
            </Link>
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <motion.button  variants={textAnimation} custom={1} type="button" className="btn-item bg-dark fw-4 ls-2">
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
