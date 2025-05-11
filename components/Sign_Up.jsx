import * as React from "react";
// import "./styles/Sign_Up.css"
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";

import { Email, Height, Password, Smartphone, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CreateUserSlice from "../Redux/Slices/CreateUserSlice";

const Sign_Up = () => {

  const [userCredentials , setUserCredentials] = useState({
    name : "",
    email : "",
    Password : ""
  })

  const dispatch = useDispatch()

  const handleUserCredentials = (e)=>{
    setUserCredentials(prevState=>({
      ...prevState,
      [e.target.name] : e.traget.value
    } 
    ))
  }

  const boxStyle = {
    // position: "absolute",
    // top: "10%",
    // width: "200",
    // height: "200",
    // left: "10%",
    boxShadow: '1px 1px 20px 2px '
  };


  const handleSignUpButton = ()=>{
    dispatch(CreateUserSlice(userCredentials))
  }

  return (
    <div className="d-flex justify-content-center  align-items-center" style={{ "height": "100vh" , "backgroundColor" : "#BED1CF" }}>
     <div className="align-self-center">
     <Grid className="container-fluid align-self-center ">
        <Box
          style={boxStyle}
          bgcolor={"white"}
          className="border border-black rounded w-auto p-3 h-auto d-inline-block"
        >
          
            <Box height={10} />
            <Box>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                margin={"normal"}
                color={"#378CE7"}
              >
                Sign Up
              </Typography>
            </Box>

            <Box height={15} />
            <Grid>
              <TextField
                label="username"
                variant="outlined"
                name="name"
                value={userCredentials.name}
                required
                fullWidth
                onChange={()=>handleUserCredentials()}
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
                name="password"
                value={userCredentials.Password}
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
            {/* <Grid>
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
            </Grid> */}
            <Box height={15} />
            <Grid>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email"
                type="Email"
                name="email"
                value={userCredentials.email}
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
            {/* <Grid>
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
            </Grid> */}
            <Grid>
              <Typography
                variant="caption"
                display="block"
                align="center"
                marginTop={2}
                gutterBottom
              //   /bottom margin/
              >
                Already User? <Link to="/signin">Click Here</Link>
              </Typography>
            </Grid>

            <Box height={15} />
            <Grid classname="d-flex justify-content-center">
              <Button variant="contained" onClick={()=>handleSignUpButton}>
                Sign-up
              </Button>
            </Grid>
          
        </Box>
      </Grid>
     </div>
    
    </div>

  );
};
export default Sign_Up;