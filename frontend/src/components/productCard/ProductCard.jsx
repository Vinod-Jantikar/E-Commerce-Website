import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("hi");
    navigate(`/products/${item._id}`);
  };

 

  return (
    <Grid border="2px solid whitesmoke" onClick={handleClick} width="32%" sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <img src={item.url} alt="pic" width="100%" height="60%" />
      <Typography textAlign="center">{item.title}</Typography>
      <Typography textAlign="center">{item.description}</Typography>
      <Typography textAlign="center">{item.price}</Typography>
    </Grid>
  );
};

export default ProductCard;
