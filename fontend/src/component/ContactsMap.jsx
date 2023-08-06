import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

function ContactMap() {
  const [data, setData] = useState([]);

  const getcontactdata = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/all_contacts`
      );
      setData(response.data.contact);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  var markerIcon = new L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-blue-512.png",
    iconSize: [38, 38],
  });
  useEffect(() => {
    getcontactdata();
  }, []);
  return (
    <MapContainer
      center={[33.86, 36.27]}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
      style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((ele) => {
        return (
          <Marker
            position={[ele.latitude, ele.longitude]}
            icon={markerIcon}
            key={ele.id}>
            <Popup>
              {ele.name} <br /> {ele.phone_number}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default ContactMap;
