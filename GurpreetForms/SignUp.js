import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";

import { Email, Height, Smartphone, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const boxStyle = {
    position: "absolute",
    top: "10%",
    width: "200",
    height: "200",

    left: "10%",
  };

  return (
    <Grid className="container-fluid">
      <Box
        style={boxStyle}
        bgcolor={"#cce7e8"}
        className="border border-black rounded w-auto p-3 h-auto d-inline-block"
      >
        <Container>
          <Box height={10} />
          <Box>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              margin={"normal"}
            >
              SignUp
            </Typography>
          </Box>

          <Box height={15} />
          <Grid>
            <TextField
              label="username"
              variant="outlined"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Box height={15} />
          <Grid>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="password"
              type="password"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Box height={15} />
          <Grid>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label=" confirm password"
              type="password"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Box height={15} />
          <Grid>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Email"
              type="Email"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Box height={15} />
          <Grid>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Phone Number"
              type="password"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Smartphone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Box height={15} />
          <Grid>
            <Button variant="contained" className="center">
              Sign-up
            </Button>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
};
export default SignUp;