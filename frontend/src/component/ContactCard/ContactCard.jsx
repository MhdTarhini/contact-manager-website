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
    } catch (error) {
      console.error(error);
    }
  };
  const fecthContacts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/all_contacts"
      );
      setContact(response.data.contact);
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
              <div className="name">Name: {ele.name}</div>
              <div className="phone-number">
                Phone Number: {ele.phone_number}
              </div>
              <div className="phone-number">Country: {ele.country}</div>
              <div className="phone-number">City: {ele.city}</div>
              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => {
                    navigate(`/add/${ele.id}`);
                  }}>
                  Edit
                </button>
                <button
                  className="delete"
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
