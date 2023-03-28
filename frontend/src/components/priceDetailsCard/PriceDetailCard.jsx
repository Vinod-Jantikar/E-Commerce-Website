import {  Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const PriceDetailCard = () => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", color: "#567189", fontSize: "15px" }}
      >
        PRICE DETAILS
      </Typography>
      <Divider />
      <Stack direction="row" spacing={20} marginTop="10px">
        <Typography variant="body2">Total MRP</Typography>
        <Typography variant="body2">Rs. 1499</Typography>
      </Stack>
      <Stack direction="row" spacing={20}>
        <Typography variant="body2">Discount on MRP</Typography>
        <Typography variant="body2">Rs. 0</Typography>
      </Stack>
      <Stack direction="row" spacing={20}>
        <Typography variant="body2">Coupon Discount</Typography>
        <Typography variant="body2">Rs. 0</Typography>
      </Stack>
      <Stack direction="row" spacing={20}>
        <Typography variant="body2">Convenience Fee</Typography>
        <Typography variant="body2">FREE</Typography>
      </Stack>

      <Stack direction="row" spacing={20} marginTop="35px">
        <Typography>Total Amount</Typography>
        <Typography>Rs. 1499</Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: "10px", background: "#f82556" }}
      >
        PLACE ORDER
      </Button>
    </>
  );
};

export default PriceDetailCard;
