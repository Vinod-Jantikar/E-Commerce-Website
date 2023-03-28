import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const [signUpdetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpdetails, [name]: value });
  };

  const submitSignUpDetails = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/signup`, {
      method: "POST",
      body: JSON.stringify(signUpdetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Box
      sx={{ width: "300px", border: "1px solid grey", margin: "100px auto" }}
    >
      <Typography variant="h6">Sign up here</Typography>
      <form onSubmit={submitSignUpDetails}>
        <Box>
          <TextField
            id="outlined-basic"
            name="name"
            //   value={signUpdetails.name}
            label="Name"
            variant="outlined"
            sx={{ width: "90%", margin: "5%" }}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            name="email"
            //   value={signUpdetails.email}
            label="Email"
            variant="outlined"
            sx={{ width: "90%", margin: "5%" }}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            name="password"
            //   value={signUpdetails.password}
            label="Password"
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
            Signup
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
