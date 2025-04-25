import React from "react";

const ServicesModal = ({onClick, item}) => {
  return (
    <div className="services_modal">
      <div className="services_modal-content">
        <i
          onClick={() => onClick()}
          className="uil uil-times services-modal-closeButton"
        ></i>
        <h3 className="services_modal-title">{item.title}</h3>
        <ul className="services_modal-services grid">
          {item.content.map((text, index) => {
            return (
              <li key={index} className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
