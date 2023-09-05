import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { Button, Result } from "antd";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [mesege, setMesege] = useState();
  const [succses, setSuccses] = useState(false);
  const [state, setState] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/messages", {
        name,
        message,
        email,
      });

      console.log(); // Ответ от бэкенда
      setMesege(response.data.message);
      setSuccses(true);
      console.log(response.data.message); // Ответ от бэкенда
      setEmail("");
      setName("");
      setMessage("");
      // Можно выполнить дополнительные действия при успешном ответе, например, обновить список сообщений или вывести уведомление об успехе.
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      setError(error);

      // Обработка ошибки, например, вывод сообщения об ошибке на экран.
    } finally {
      setLoading(false);
      setState(true);
    }
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
      className="contact section-p"
    >
      <div className="container">
        <div className="contact-section">
          <div className="section-title">
            <motion.h3 variants={imageAnimation} className="text-brown">
              contact <span className="text-dark">me</span>
            </motion.h3>
            <motion.p variants={imageAnimation} custom={1} className="text">
              I offer the right solutions for your digital business.
            </motion.p>
          </div>
        </div>

        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          {state === false ? (
            <>
              <div className="form-elem" id="form">
                <motion.input
                  variants={imageAnimation}
                  custom={2}
                  placeholder="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-elem">
                <motion.input
                  variants={imageAnimation}
                  custom={3}
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <motion.div
                variants={imageAnimation}
                custom={4}
                className="form-elem"
              >
                <textarea
                  placeholder="messege"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                ></textarea>
              </motion.div>
              <button
                type="submit"
                className="bg-brown text-white submit-btn fw-3 fs-22"
              >
                {loading === true ? "loading" : "Submit"}
              </button>
            </>
          ) : (
            <Result
              status={succses ? "success" : error ? "error" : "warning"}
              title={
                succses
                  ? mesege
                  : error
                  ? error.response.data.error
                  : "an unknown error occurred"
              }
              subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
              extra={[
                <Button
                  onClick={() => {
                    setState(false);
                    setSuccses(false);
                  }}
                  key="buy"
                >
                  Send Again
                </Button>,
              ]}
            />
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
