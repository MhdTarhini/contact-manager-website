import React from "react";
import ContactCard from "../component/ContactCard/ContactCard";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <ContactCard />
    </>
  );
}

export default LandingPage;
