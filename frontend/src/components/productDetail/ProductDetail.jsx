import { Stack, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeApiCall } from "../../api";


const AddToCartBtn = styled(Button)({
  '&:hover': {
    color: "white",
    backgroundColor: "#f82556",
  }
})

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  // const[discount, setDiscount] = useState(0)
 
  useEffect(() => {
    getProduct();
   
  }, [id]);

  const getProduct = () => {
    makeApiCall(`/product/${id}`, {
      method: "GET",
    })
      .then((data) => setProductData(data))
      .catch((err) => console.log(err));
  };

  

  // console.log("productData", productData);

  return (
    <>
      {/* First Box = Images Box */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        margin="2% auto"
        width="80%"
        padding="20px"
      >
        <Box width="35%" height="450px">
          <img src={productData?.url} alt="hfdhs" width="100%" height="100%" />
        </Box>

        {/* Product Description Box  */}
        <Box width="60%" height="500px">
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              {productData?.title}
            </Typography>
            <Typography variant="body1">{productData?.description}</Typography>
          </Box>
          <Typography variant="body1">{productData?.type}</Typography>

          <Stack direction="row" spacing={1}>
            <Typography variant="h6">Rs. {productData?.price}</Typography>
            <Typography
              variant="h6"
              sx={{ color: "grey", textDecoration: "line-through" }}
            >
              {productData?.discount}
            </Typography>
            <Typography variant="h6">(64% OFF)</Typography>
          </Stack>

          <Stack direction="row" spacing={2} margin="30px 100px">
            <AddToCartBtn
              sx={{ backgroundColor: "#f82556", width: "60%", color: "white" }}
            >
              ADD TO CART
            </AddToCartBtn>
            <Button variant="outlined" sx={{ width: "30%" }}>
              WISHLIST
            </Button>
          </Stack>

          <Box sx={{ margin: "30px 0" }}>
            <Typography variant="subtitle2">DELIVERY OPTIONS</Typography>
            <Stack direction="row" spacing={1} margin="10px 0">
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="ENTER PINCODE"
                size="small"
              />
              <Button variant="text" sx={{ width: "100px", color: "#f82556" }}>
                Check
              </Button>
            </Stack>
            <Typography>
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography variant="body2">100% Original Products</Typography>
            <Typography variant="body2">Pay on delivery might be available</Typography>
            <Typography variant="body2">Easy 30 days returns and exchanges</Typography>
            <Typography variant="body2">Try & Buy might be available</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProductDetail;
