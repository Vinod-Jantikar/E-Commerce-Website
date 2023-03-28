import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SignIn = () => {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInDetails({ ...signInDetails, [name]: value });
  };

  const submitSignInDetails =  (e) => {
    e.preventDefault();
    console.log(signInDetails);

     fetch(`http://localhost:8080/signin`, {
      method: "POST",
      body: JSON.stringify(signInDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Box
      sx={{ width: "300px", border: "1px solid grey", margin: "100px auto" }}
    >
      <Typography variant="h6">Sign In here</Typography>
      <form onSubmit={submitSignInDetails}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            sx={{ width: "90%", margin: "5%" }}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Password"
            name="password"
            variant="outlined"
            sx={{ width: "90%", margin: "5%" }}
            onChange={handleChange}
          />
        </Box>

        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "90%", margin: "5%" }}
          >
            Signin
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
