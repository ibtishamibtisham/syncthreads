// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);
const func = (lat, long) => {
  localStorage.setItem("lat", lat);
  localStorage.setItem("long", long);
};
export default function Cards1({ city, lat, long, id }) {
  //   console.log(id);
  return (
    <Link to="/map1">
      <Card
        sx={{
          minWidth: 300,
          width: "200px",
          height: "200px",
          background: "aqua",
          border: "1px solid grey",
          borderRadius: "10px",
          boxShadow: "5px grey",
        }}
        onClick={() => {
          func(lat, long);
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontStyle: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            {city}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
