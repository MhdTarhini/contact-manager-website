import React, { useEffect, useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // useEffect(async () => {}, []);
  return (
    <>
      <div className="form-container">
        <div className="input">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="input">
          <label htmlFor="phone-number">phone number</label>
          <input
            type="text"
            name="phone number"
            id="phone-number"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="country">country</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="city">city</label>
          <input type="text" name="city" id="city" onChange={handleChange} />
        </div>
        <div className="input">
          <label htmlFor="latitud">latitud</label>
          <input
            type="text"
            name="latitud"
            id="latitud"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="longtitud">longtitud</label>
          <input
            type="text"
            name="longtitud"
            id="longtitud"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
