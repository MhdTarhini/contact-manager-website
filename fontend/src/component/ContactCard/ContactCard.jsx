import React, { useEffect } from "react";
import "./contactCard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ContactCard() {
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);
  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/delete_contact/${id}`
      );
      console.log(response.data.contact);
    } catch (error) {
      console.error(error);
    }
  };
  const fecthContacts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/all_contacts"
      );
      setContact(response.data.contacts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fecthContacts();
  }, [contact]);
  return (
    <>
      <div className="card-container">
        {contact.map((ele) => {
          return (
            <div className="contact-card" key={ele.id}>
              <img src="" alt="" srcset="" />
              <div className="name">{ele.name}</div>
              <div className="phone-number">{ele.phone_number}</div>
              <div className="phone-number">{ele.country}</div>
              <div className="phone-number">{ele.city}</div>
              <div className="buttons">
                <button
                  className="map"
                  onClick={() => {
                    navigate(`/map/${ele.id}`);
                  }}>
                  Map
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    navigate(`/add/${ele.id}`);
                  }}>
                  Edit
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    deleteContact(ele.id);
                  }}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ContactCard;
