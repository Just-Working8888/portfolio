import React, { useRef, useState } from "react";
import "./About.css";

import { about_stats } from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";
import resume from "../../Bekbolot-Resume-1.png";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";
const About = () => {
  const vidRef = useRef(null);

  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if (toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  };

  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (src) => {
    setImageModal(true);
    setImageSource(src);
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
  const iconAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };
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
      id="About"
      className="about section-p"
    >
      <div className="container">
        <div className="about-content">
          <motion.div variants={textAnimation} className="about-grid grid">
            <div
              onClick={() => setImageModal(false)}
              className={
                imageModal ? "imagee-box show-imagee-box" : "imagee-box"
              }
            >
              <div className="imagee-box-content">
                <img
                  onClick={(e) => e.stopPropagation()}
                  src={imageSource}
                  alt=""
                />
                <span
                  className="imagee-box-close-btn"
                  onClick={() => setImageModal(false)}
                >
                  <ImCancelCircle size={30} />
                </span>
              </div>
            </div>
            <div
              className="work-itemm text-center"
              onClick={() => setImageOnModal(resume)}
            >
              <img src={resume} alt="" />
              <span className="work-item-icon">
                <BsPlusLg size={38} className="text-brown" />
              </span>
            </div>
            <div className="section-title">
              <h3 className="text-brown">
                resume <span className="text-dark">Bekbolot</span>
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam culpa distinctio mollitia consectetur dolore! Iusto
                dolores reprehenderit at ad! Molestiae.
              </p>
            </div>
          </motion.div>

          <div className="about-grid grid">
            {about_stats.map((about_stat, index) => {
              return (
                <motion.div
                  variants={iconAnimation}
                  custom={index + 1}
                  className="about-item text-center flex"
                  key={index}
                >
                  <div className="about-item-icon">
                    <img src={about_stat.image} alt="" />
                  </div>
                  <div className="about-item-text text-left">
                    <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                    <p className="text">{about_stat.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={imageAnimation}
            custom={3}
            className="about-grid grid"
          >
            <div className="section-title">
              <h3 className="text-brown">
                Video <span className="text-dark">Presentation</span>
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                molestias maxime tenetur, temporibus aspernatur, omnis expedita
                saepe sapiente adipisci laboriosam necessitatibus ullam eveniet
                asperiores nostrum.
              </p>
            </div>

            <div className="about-video">
              <video className="about-video" autoPlay loop ref={vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button
                type="button"
                className="vidPlayBtn flex flex-c"
                onClick={playVideo}
              >
                <FaPlay className="text-brown" size={28} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
