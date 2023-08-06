import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contactForm.css";
import { useParams } from "react-router-dom";

function ContactForm() {
  const [data, setData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [isSumbit, setIsSubmit] = useState("");
  const param = useParams();
  let path = "";

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addContact = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/manage_contact/${path}`,
        data
      );
    } catch (error) {
      console.error(error);
    }
  };
  const getcontactdata = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get_contact/${path}`,
        data
      );
      setContactData(response.data.contact);
    } catch (error) {
      console.error(error);
    }
  };
  if (param.id === "add") {
    path = "add";
  } else {
    path = `${param.id}`;
    if (contactData.length == 0) {
      getcontactdata();
    }
  }
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
          <label htmlFor="latitude">latitude</label>
          <input
            type="text"
            name="latitude"
            id="latitude"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="longitude">longitude</label>
          <input
            type="text"
            name="longitude"
            id="longitude"
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
