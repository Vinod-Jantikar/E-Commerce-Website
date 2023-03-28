import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const CartEmpty = () => {
  return (
    <Stack justifyContent="center" alignItems="center" margin="120px" rowGap="20px">
      <img width="100px"
        src="https://aapka-fashions.vercel.app/assets/cart/shopping-bag.png"
        alt="bagimage"
      />
      <Typography variant="h5">Hey, it feels so light!</Typography>
      <Typography>
        {" "}
        There is nothing in your bag. Let's add some items.
      </Typography>
      <Button variant="outlined" sx={{marginTop: "10px"}}>Add Item</Button>
    </Stack>
  );
};

export default CartEmpty;
