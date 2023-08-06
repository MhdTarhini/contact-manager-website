import React from "react";
import "./contactCard.css";
import { useNavigate } from "react-router-dom";

function ContactCard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card-container">
        <div className="contact-card">
          <img src="" alt="" srcset="" />
          <div className="name">name</div>
          <div className="phone-number">phone number</div>
          <div className="phone-number">country</div>
          <div className="phone-number">city</div>
          <div className="buttons">
            <button className="map">Map</button>
            <button className="edit">Edit</button>
          </div>
        </div>
        <div className="contact-card">
          <img src="" alt="" srcset="" />
          <div className="name">name</div>
          <div className="phone-number">phone number</div>
          <div className="phone-number">country</div>
          <div className="phone-number">city</div>
          <div className="buttons">
            <button className="map">Map</button>
            <button className="edit">Edit</button>
          </div>
        </div>
        <div className="contact-card">
          <img src="" alt="" srcset="" />
          <div className="name">name</div>
          <div className="phone-number">phone number</div>
          <div className="phone-number">country</div>
          <div className="phone-number">city</div>
          <div className="buttons">
            <button className="map">Map</button>
            <button
              className="edit"
              onClick={() => {
                navigate("/add/2");
              }}>
              Edit
            </button>
          </div>
        </div>
        <div className="contact-card">
          <img src="" alt="" srcset="" />
          <div className="name">name</div>
          <div className="phone-number">phone number</div>
          <div className="phone-number">country</div>
          <div className="phone-number">city</div>
          <div className="buttons">
            <button className="map">Map</button>
            <button className="edit">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
