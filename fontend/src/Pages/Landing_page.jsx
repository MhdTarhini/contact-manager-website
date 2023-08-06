import React from "react";
import ContactCard from "../component/ContactCard";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/add");
        }}>
        Add New
      </button>
      <ContactCard />
    </>
  );
}

export default LandingPage;
