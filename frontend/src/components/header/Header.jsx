import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { TextField } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Stack } from "@mui/system";

const pages = ["Men", "Women", "Kids", "Best Collection"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Search Box  */}
          <Box sx={{ width: "500px", marginRight: "200px" }}>
            <TextField
              placeholder="Search Products"
              variant="outlined"
              fullWidth="true"
            />
          </Box>

          {/* Profile Icons  */}
          <Stack direction="row" spacing= {2} >
            <PermIdentityIcon />
            <FavoriteBorderIcon/>
            <LocalMallOutlinedIcon/>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
