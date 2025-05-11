import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import gmdaLogo from '../Images/gmdalogo.jpg'
import { Alert, Button } from '@mui/material';
import Box from "@mui/material/Box";
import SideBar from '../components/SideBar';
import { Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useParams } from 'react-router-dom';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Snackbar from '@mui/material/Snackbar';
import NavbarComponent from '../components/Navbar';
import { Paper } from '@mui/material'
import ResolverInbox from './ResolverInbox';


function ActionResolverDashboard() {

  const {username} = useParams();
  console.log("Username Entered ",username)

  const navigate = useNavigate();
  const [Section, setSection] = React.useState({ Section: 0 });

  const boxStyle = {
    position: "absolute",
    top: "10%",
    left: "25%",
    margin: "auto",
  };

  const logout_user = () => {
    navigate("/")
  }

  const handleChange = (event) => {
    setSection(event.target.value);
  };

  const dept = [
    {
      label: "Infra 1",
      value: "Infra 1"
    },
    {
      label: "Infra 2",
      value: "Infra 2"
    },
    {
      label: "Mobility",
      value: "Mobility"
    },
    {
      label: "GIS",
      value: "GIS"
    }


  ]
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div >
    <div>
        {/* Navbar */}
        <NavbarComponent />
    </div>

    <div className='d-flex ' >
        <div style={{ "maxWidth": "30rem" }}>
            <SideBar />
        </div>
        < div className=' d-flex flex-column px-5' style={{ "width":"100rem", marginTop: "5rem" }}>
            
                <Paper elevation={3} style={{ backgroundColor: "#9C9C9C", borderRadius: "10px" , maxWidth :"100%" ,marginBottom :"2rem"}}>
                    <p style={{  color:"white",fontWeight :600, margin :"10px 0px 10px 10px"}}>Project Details :</p>
                </Paper>
            
            <ResolverInbox/>
        </div>
    </div>
    {/* SideBar */}


</div>
  )

}

export default ActionResolverDashboard
