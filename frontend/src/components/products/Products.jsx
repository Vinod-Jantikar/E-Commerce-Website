import Box from "@mui/material/Box";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch(`http://localhost:8080/product`).then((res) =>
      res.json().then((data) => setProducts(data))
    );
  };

  console.log(products);

  return (
    <Stack
      direction="row"
      spacing="4%"
      justifyContent="center"
      width="80%"
      margin=" 5% auto"
    >
      {/* First Box */}
      <Box
        sx={{ width: "25%", height: "500px", border: "1px solid black" }}
      ></Box>

      {/* Second Box  */}
      <Grid
        container
        spacing={1}
        sx={{
          width: "70%",
          justifyContent: "space-around",
          rowGap: "10px",
          border: "1px solid black",
        }}
      >
        {products?.map((item) => (
          <ProductCard item={item} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Products;
