import { useGeoLoaction } from "../hooks/useGeoLocation";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./Mapview.css";

const func = () => {
  let lat = localStorage.getItem("lat");
  let long = localStorage.getItem("long");
  return [lat, long];
};
function LocationMarker() {
  const [position, setPosition] = useState([19, 75]);
  const Zoom = 9;

  useEffect(() => {
    let s = func();
    setPosition(s);
  }, []);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      map.flyTo(position, Zoom);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Maps() {
  const position = [21, 78];

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
