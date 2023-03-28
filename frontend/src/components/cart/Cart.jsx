import React from "react";
import Box from "@mui/material/Box";
import CartCard from "../cartCard/CartCard";
import OfferAvailable from "../offerAvailable/OfferAvailable";
import PriceDetailCard from "../priceDetailsCard/PriceDetailCard";
import { Stack } from "@mui/material";

const cartData = [
  {
    imgUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    nameOfTheProduct: "Roadstar",
    description: "Men Blue Printed Casual Sustainable Shirt",
    size: 40,
    qty: 1,
    price: 599,
    discount: 1499,
    offer: "60% OFF",
    returnAvailable: "14 days return available",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    nameOfTheProduct: "Roadstar",
    description: "Men Blue Printed Casual Sustainable Shirt",
    size: 40,
    qty: 1,
    price: 599,
    discount: 1499,
    offer: "60% OFF",
    returnAvailable: "14 days return available",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    nameOfTheProduct: "Roadstar",
    description: "Men Blue Printed Casual Sustainable Shirt",
    size: 40,
    qty: 1,
    price: 599,
    discount: 1499,
    offer: "60% OFF",
    returnAvailable: "14 days return available",
  },
  {
    imgUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    nameOfTheProduct: "Roadstar",
    description: "Men Blue Printed Casual Sustainable Shirt",
    size: 40,
    qty: 1,
    price: 599,
    discount: 1499,
    offer: "60% OFF",
    returnAvailable: "14 days return available",
  },
];

const Cart = () => {
  return (
    <Stack
      direction="row"
      sx={{ width: "80%", marginLeft: "100px", marginBottom: "50px" }}
    >
      <Box>
        <OfferAvailable />
        <Box sx={{ margin: "10px" }}>
          {cartData.map((item) => (
            <CartCard product={item} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "40%",
        //   border: "1px solid black",
        margin: "88px 30px 0px 0px",
          height: "240px",
          boxSizing: "border-box",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }}
      >
        <PriceDetailCard />
      </Box>
    </Stack>
  );
};

export default Cart;
