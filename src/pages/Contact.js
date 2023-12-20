import React from "react";
import { useSpring, animated } from "react-spring";


const Contact = () => {
  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 5, transform: "translateY(0)" },
    config: { tension: 100, friction: 20 },
  });

  return (
    <div className="container">
      <div className="row">
        <animated.h1 style={headingAnimation}>Свяжитесь с нами</animated.h1>
      </div>
      <div className="row">
        <h4 style={{ textAlign: "center" }}>Будем рады вашим сообщениям</h4>
      </div>{" "}
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Имя</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Почта</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: "right" }}>
            <input type="text" required />
            <label>Номер</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required></textarea>
            <label>Сообщение</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Отправить</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;