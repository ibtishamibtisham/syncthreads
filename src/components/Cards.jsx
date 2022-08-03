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

export default function Cards() {
  return (
    <Link to="/map">
      <Card
        sx={{
          minWidth: 400,
          width: "200px",
          height: "200px",
          background: "aqua",
          border: "1px solid grey",
          borderRadius: "10px",
          boxShadow: "5px grey",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Current Location
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
