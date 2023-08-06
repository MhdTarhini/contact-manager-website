import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}>
          Logo
        </div>
        <div className="right-nav">
          <div
            className="map"
            onClick={() => {
              navigate("/map");
            }}>
            Map
          </div>
          <div
            className="all-contact"
            onClick={() => {
              navigate("/");
            }}>
            Contacts
          </div>
          <div
            className="add-contact"
            onClick={() => {
              navigate("/add");
            }}>
            New
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
