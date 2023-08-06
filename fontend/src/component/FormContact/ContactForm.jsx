import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contactForm.css";
import { useParams } from "react-router-dom";

function ContactForm() {
  const [data, setData] = useState([]);
  const [isSumbit, setIsSubmit] = useState("");
  const param = useParams();
  console.log(param);
  let path = "";
  if (param.id == "add") {
    path = "add";
  } else {
    path = `${param.id}`;
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addContact = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/manage_contact/${path}`,
        data
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    addContact();
  }, [isSumbit]);

  return (
    <>
      <div className="form-container">
        <div className="input">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div className="input">
          <label htmlFor="phone_number">phone number</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
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
          <label htmlFor="latitud">latitude</label>
          <input
            type="text"
            name="latitude"
            id="latitud"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="longitud">longitude</label>
          <input
            type="text"
            name="longitude"
            id="longitud"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            setIsSubmit(true);
          }}>
          submit
        </button>
      </div>
    </>
  );
}

export default ContactForm;
