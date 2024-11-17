import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { UserProfile } from "../util/Context";
import { useParams } from "react-router-dom";

function Profilemap() {
  const {profile} = useContext(UserProfile)
  const {id} = useParams();
  return (
    <MapContainer center={[`${profile[id].location.coordinates.latitude}`, `${profile[id].location.coordinates.latitude}`]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
      ></TileLayer>
      <Marker
        position={[`${profile[id].location.coordinates.latitude}`, `${profile[id].location.coordinates.latitude}`]}
        icon={
          new L.Icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            iconSize: [32, 32],
          })
        }
      >
        <Popup>
          <h4 className="text-md text-black">{profile[id].name.first} Location</h4>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Profilemap;
