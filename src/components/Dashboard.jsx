import React from "react";
import Cards from "./Cards";
import Cards1 from "./cards1";
import "./Dashboard.css";
import Mapview from "./Mapview";

export default function Dashboard() {
  const mydata = [
    { name: "Mumbai", state: "Maharashtra", lat: "18.975", lon: "72.825833" },
    { name: "Delhi", state: "Delhi", lat: "28.666667", lon: "77.216667" },
    {
      name: "Bangalore",
      state: "Karnataka",
      lat: "12.983333",
      lon: "77.583333",
    },
    {
      name: "Hyderabad",
      state: "Telangana",
      lat: "17.375278",
      lon: "78.474444",
    },
    { name: "Ahmedabad", state: "Gujarat", lat: "23.033333", lon: "72.616667" },
    {
      name: "Chennai",
      state: "Tamil Nadu",
      lat: "13.083333",
      lon: "80.283333",
    },
    {
      name: "Kolkata",
      state: "West Bengal",
      lat: "22.569722",
      lon: "88.369722",
    },
    ,
    { name: "Jaipur", state: "Rajasthan", lat: "24.583333", lon: "86.85" },
    { name: "Lucknow", state: "Uttar Pradesh", lat: "26.85", lon: "80.916667" },
    { name: "Kanpur", state: "Uttar Pradesh", lat: "26.466667", lon: "80.35" },
    { name: "Nagpur", state: "Maharashtra", lat: "23.3", lon: "82.3" },
    {
      name: "Indore",
      state: "Madhya Pradesh",
      lat: "22.716667",
      lon: "75.833333",
    },
    { name: "Thane", state: "Maharashtra", lat: "19.2", lon: "72.966667" },
    { name: "Bhopal", state: "Madhya Pradesh", lat: "23.266667", lon: "77.4" },
  ];
  return (
    <>
      <div className="cards">
        <Cards />
      </div>
      <div className="cards1">
        {mydata.map((item) => {
          return <Cards1 city={item.name} lat={item.lat} long={item.lon} />;
        })}
      </div>
    </>
  );
}
