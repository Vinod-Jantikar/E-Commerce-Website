import { Box, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

const Footer = () => {
  return (
    <>
    <Stack direction="row" spacing={3} justifyContent="space-around" sx={{backgroundColor: "#333", color: "white", padding: "20px"}} >
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>WHO ARE WE</Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Contact Us</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>SHIPPING & RETURN POLICY</Typography>
        <Typography variant="body2">Help Center Terms & Conditions</Typography>
        <Typography variant="body2">Privacy Policy</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>USEFUL LINKS</Typography>
        <Typography variant="body2">Blog</Typography>
        <Typography variant="body2">Careers</Typography>
        <Typography variant="body2">Site Map</Typography>
        <Typography variant="body2">Corporate Information</Typography>
        <Typography variant="body2">Whitehat</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>KEEP IN TOUCH</Typography>
        <Stack direction="row" spacing={1}>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <FacebookIcon />
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>DOWNLOAD OUR APP</Typography>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjoWdFyWucs73oFmnUTmjLke2qJfuQff9A9g&usqp=CAU"
          alt="playstoreicon"
          width="100px"
        />
        <img
          src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png"
          alt="applestore"
          width="100px"
        />
      </Stack>
    </Stack>

    {/* Second Footer starts */}
    <Stack direction="row" spacing={3} justifyContent="space-around" sx={{ padding: "20px"}}>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>WOMEN</Typography>
        <Typography variant="body2">IndianWear</Typography>
        <Typography variant="body2">WesternWear</Typography>
        <Typography variant="body2">Bags</Typography>
        <Typography variant="body2">FootWear</Typography>
        <Typography variant="body2">Lingerie</Typography>
        <Typography variant="body2">SportsWear</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>MEN</Typography>
        <Typography variant="body2">IndianWear</Typography>
        <Typography variant="body2">WesternWear</Typography>
        <Typography variant="body2">Bags</Typography>
        <Typography variant="body2">FootWear</Typography>
        <Typography variant="body2">Jackets</Typography>
        <Typography variant="body2">SportsWear</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>KIDS</Typography>
        <Typography variant="body2">IndianWear</Typography>
        <Typography variant="body2">WesternWear</Typography>
        <Typography variant="body2">Bags</Typography>
        <Typography variant="body2">FootWear</Typography>
        <Typography variant="body2">Jackets</Typography>
        <Typography variant="body2">SportsWear</Typography>
      </Stack>
      <Stack>
        <Typography variant="body2" sx={{fontWeight: "600"}}>TOP BRANDS</Typography>
        <Typography variant="body2">Adidas</Typography>
        <Typography variant="body2">Reebok</Typography>
        <Typography variant="body2">Puma</Typography>
      </Stack>

    </Stack>
    </>
  );
};

export default Footer;
