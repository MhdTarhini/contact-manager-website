import React from "react";
import ContactCard from "../component/ContactCard/ContactCard";
import { useNavigate } from "react-router-dom";
import ContactMap from "../component/ContactsMap";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/add/add");
        }}>
        Add New
      </button>
      <ContactCard />
      <ContactMap />
    </>
  );
}

export default LandingPage;
