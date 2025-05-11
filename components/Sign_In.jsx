import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import { VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";



const Sign_In = () => {

  const navigate = useNavigate();

  const boxStyle = {
    boxShadow: '1px 1px 20px 2px '
  };

  const [userInput , setuserInput] = useState({
    username : "",
    password : ""
  })
  useEffect(() => {
    // This will run once when the component mounts
    localStorage.setItem('username1', 'abc');
    localStorage.setItem('password1', '12345');
    localStorage.setItem('username2', 'admin');
    localStorage.setItem('password2', '111');
    localStorage.setItem('username3',"resolver")
    localStorage.setItem('password3','222')
    localStorage.setItem('username4',"Amit")
    localStorage.setItem('password4','amit')
    localStorage.setItem('username5',"Ajay")
    localStorage.setItem('password5','ajay')
    localStorage.setItem('username6',"Raman")
    localStorage.setItem('password6','raman')
    localStorage.setItem('username7',"Rakesh")
    localStorage.setItem('password7','rakesh')
  }, []); 

  //set input Detailt

  const inputDetails = (e)=>{
    e.preventDefault();
    setuserInput((userInput)=>({
      ...userInput,[e.target.name] : e.target.value
    }))
  }

  const Sign_In_Click = (e)=>{
    e.preventDefault()
    const username1 = localStorage.getItem("username1") 
    const password1 = localStorage.getItem("password1")  
    const username2 = localStorage.getItem("username2")
    const password2 = localStorage.getItem("password2")
    const username3 = localStorage.getItem("username3")
    const password3 = localStorage.getItem("password3")
    const username4 = localStorage.getItem("username4")
    const password4 = localStorage.getItem("password4")
    const username5 = localStorage.getItem("username5")
    const password5 = localStorage.getItem("password5")
    const username6 = localStorage.getItem("username6")
    const password6 = localStorage.getItem("password6")
    const username7 = localStorage.getItem("username7")
    const password7 = localStorage.getItem("password7")

    console.log("username4",username4)
    console.log("User Input",userInput.username)
    
    if(userInput.username === ""){
      alert("Username can't be blank")
    }
    else if(userInput.password === ""){
      alert("Password Can't be blank")
    }
   
    else if(userInput.username === username1 && userInput.password === password1){
      navigate("/userlogin")
    }
    else if(userInput.username ===username2 && userInput.password === password2){
      localStorage.setItem('role','')
      navigate("/admin")
    } 
    else if(userInput.username === username3 && userInput.password === password3){
      localStorage.setItem('role','resolver')
      
      navigate("/actionresolver")
    }
    else if(userInput.username === username4 && userInput.password === password4){
      localStorage.setItem('role','resolver')
      navigate(`/actionresolver/${username4}`)
    }
    else if(userInput.username === username5 && userInput.password === password5){
      localStorage.setItem('role','resolver')
      navigate("/actionresolver/username5")
    }
    else if(userInput.username === username6 && userInput.password === password6){
      localStorage.setItem('role','resolver')
      navigate("/actionresolver/username6")
    }
    else if(userInput.username === username7 && userInput.password === password7){
      localStorage.setItem('role','resolver')
      navigate("/actionresolver/username7")
    }
    else{
      return null
    }
  }


  console.log("Input name",userInput)
  
  return (
    <div className="d-flex justify-content-center   " style={{ "height": "100vh", "backgroundColor": "#BED1CF" }} >

      <div className="align-self-center">
        <Grid justify='center'>
          <Box
            style={boxStyle}
            bgcolor={"white"}
            className="border-2  p-3 mb-5  border-black rounded-5 w-auto p-3 h-auto d-inline-block  container text-center "
          >

            <Box height={10} />
            <Box>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                margin={"normal"}
                style={{ "color": "#378CE7" }}
              >
                Sign In
              </Typography>
            </Box>

            <Box height={15} />
            <Grid>
              <TextField
                label="username"
                variant="outlined"
                name="username"
                value={userInput.username}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={inputDetails}
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
                value={userInput.password}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOff />
                    </InputAdornment>
                  ),
                }}
                onChange={inputDetails}
              />
            </Grid>
            <Box height={15} />
            <Grid>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember Me!"
                ></FormControlLabel>
              </FormGroup>
            </Grid>
            <Grid>
              <Typography
                variant="caption"
                display="block"
                align="center"
                gutterBottom
              //   /bottom margin/
              >
                New User? <Link to="/signup">Click Here</Link>
              </Typography>
            </Grid>
            <Box height={15} />
            <Grid>
              <Button 
              variant="contained"
              onClick={Sign_In_Click}
              >Sign-In</Button>
            </Grid>

          </Box>
        </Grid>
      </div>
    </div>

  );
};
export default Sign_In;