import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import BigCard from "../bigCard/BigCard";

const bigCardData = [
  {
    imgUrl: "https://ik.imagekit.io/thestylist/rba/pub/media_rb/HOMEPAGE_IMAGES/05_Apr_22/1_(1).jpg",
    text: "Women",
  },
  {
    imgUrl: "https://ik.imagekit.io/thestylist/rba/pub/media_rb/HOMEPAGE_IMAGES/07_Dec_21/Rohit_Bal.png",
    text: "Men",
  },
  {
    imgUrl: "./assets/kids-img-1.jpg",
    text: "Kids",
  },
];

const Home = () => {
  // const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = () => {
  //   setLoading(true);
  //   fetch(`http://localhost:8080/product`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  if (loading) {
    return <Typography variant="h3">Loading...</Typography>;
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-around" margin="3% 0" height="500px">
        {bigCardData.map((item) => (
          <BigCard item={item} />
        ))}
      </Stack>
     
    </>
  );
};

export default Home;
