import React, { useState } from 'react'
import { Form, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import gmdaLogo from '../Images/gmdalogo.jpg'
import { Alert, Button } from '@mui/material';
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Snackbar from '@mui/material/Snackbar';
import { addComplaintQuery } from '../Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';




function UserLoginDashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [selectedSection , setSelectedSection] = useState([])
  const [userComplaintFormData, setuserComplaintFormData] = useState({
    section: {
      sectionId: 0,
      sectionName: ""
    },
    intercom: "",
    consumerName: "",
    problemDescription :"",
    complaintDescription: ""
  })

  React.useEffect(()=>{
    fetch("http://192.168.0.169:9393/api/v1/sections/")
    .then((response)=>{
      if(!response.ok){
        throw new Error("Network not working properly")
      }
      else return response.json()
    })
    .then((data)=>{
      setSelectedSection(data)
      console.log("Selected Section Data which is coming",data)
    })
    .catch((error)=>{
      console.log("Error",error)
    })
  },[])


  const boxStyle = {
    position: "absolute",
    top: "10%",
    left: "25%",
    margin: "auto",
  };

  const logout_user = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    
    if( e.target.name === "sectionName"){
      const sectionName = e.target.value
      const sectionStaff = selectedSection.find ((option) => option.sectionName === sectionName)

      if(sectionStaff){
        setuserComplaintFormData({
          ...userComplaintFormData,
          section : {
           ...userComplaintFormData.section,
           sectionId : sectionStaff.sectionId,
           sectionName : sectionName
           
        }})}
        else {
          console.log("No section  found for selected name");
      }
  } else {
      // For other fields, simply update the state
     setuserComplaintFormData(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value,
          // You may want to include this outside the conditional if you always want to update it
      }));
      
      
    }
    
    console.log("user data", userComplaintFormData)
  };

  // const dept = [
  //   {
  //     label: "Infra 1",
  //     value: "Infra 1"
  //   },
  //   {
  //     label: "Infra 2",
  //     value: "Infra 2"
  //   },
  //   {
  //     label: "Mobility",
  //     value: "Mobility"
  //   },
  //   {
  //     label: "GIS",
  //     value: "GIS"
  //   }


  // ]
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
      setOpen(false);


    };

    const handleLoadingClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setIsLoading(false)

    };

    const handleUserComplaintForm = async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        // Record start time
        
        await dispatch(addComplaintQuery(userComplaintFormData));
        // Show loading message only if loading time is greater than 1 second

        setIsLoading(false)

        setOpen(true) // Assuming handleClick is defined somewhere and handles a successful form submission
      } catch (error) {
        console.error('Error submitting complaint:', error);
        // Handle error, such as showing an error message to the user
      }
    };




    return (
      <div className='d-flex flex-column '>
        {/* navbar */}
        <div >
          <Navbar className="bg-body-tertiary d-flex flex-row justify-content-evenly" bg="dark" data-bs-theme="dark">

            <Navbar.Brand >

              <img
                src={gmdaLogo}
                width="70"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />

            </Navbar.Brand>
            <Nav.Link href="#home" className='text-white fs-2'>Project Monitoring Addressal</Nav.Link>
            <div className='d-flex flex-row mx-3 '>
              <Nav.Link className='text-white'>
                <div>
                  <Button
                    style={{ "background-color": "#9C9C9C" }}
                    variant="contained"
                    onClick={logout_user}
                  >
                    <LogoutIcon />
                  </Button>
                  {/* <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Hello , Sign In
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}><button type="button" class="btn btn-warning">Sign In</button></Typography>
                <Typography sx={{ p: 1 }}><p>New User ? <Link>Start Here</Link></p></Typography>
            </Popover>
        </div> */}
                  {/* <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                  <div> */}

                  {/* <Popper className='mt-1' {...bindPopper(popupState)} transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper>
                            <Typography className='d-flex flex-column' sx={{ p: 2 }}>
                              <button onClick={() => navigate("/signin")} type="button" class="btn btn-warning">Sign In</button>
                              <span >New User? <Link to="/signup">Click Here</Link></span>
                            </Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper> */}
                </div>
                {/* )}
              </PopupState> */}
              </Nav.Link>
              
            </div>
            {/* </Container> */}
          </Navbar>
        </div>

        {/* User Complaint Form */}
        <div className='mx-5 mt-4'>
          
          <Card >
            <CardContent>
              <div className="form-container" >
                <nav className="navbar po-nv bg-warning" >
                  <div className="container-fluid">
                    <span className="navbar-brand bg-tertiary mb-0 h1 ">Project Query Form</span>
                  </div>
                </nav>
                <Form onSubmit={handleUserComplaintForm}>
                  {/* <SideNavbar /> */}


                  <div className="row p-3  g-4 align-items-center" >
                    <div className="col-3" style={{ backgroundColor: "white" }}>
                      <TextField
                        id="sectionName"
                        name="sectionName"
                        value={userComplaintFormData.sectionName}
                        select
                        variant="outlined"
                        label="Department"
                        fullWidth
                        onChange={handleChange}
                      // onChange={(e) => handleSelect(e, 'id')}
                      // value={EmployeeFormData.salutation}
                      // name='salutation'
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.salutation}
                      // helperText={errors.salutation || ""}
                      >
                        {selectedSection.map((option,index) => (
                          <MenuItem key={index} value={option.sectionName}>
                            {option.sectionName}
                          </MenuItem>
                        ))}
                        {/* <Select options={employeeList} id='id' placeholder="- Select option -" 
                                value={employeeFullname}
                                onChange={(e)=>handleSelect(e,'id')}
                                isSearchable={true}>                             
                            </Select>  */}
                      </TextField>

                    </div>

                    <div className="col-3" aria-expanded="false">

                      <TextField
                        id="intercom"
                        name="intercom"
                        value={userComplaintFormData.intercom}
                        variant="outlined"
                        label="Inter-Communication No."
                        fullWidth
                        onChange={handleChange}
                      // value={EmployeeFormData.dept}
                      // name="dept"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.dept}
                      // helperText={errors.dept || ''} 
                      >
                      </TextField>

                    </div>

                    <div className="col-3" aria-expanded="false">

                      <TextField
                        id="purchaseIndenter"
                        variant="outlined"
                        label="Room number"
                        fullWidth
                      // value={EmployeeFormData.dept}
                      // name="dept"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.dept}
                      // helperText={errors.dept || ''} 

                      >
                        {/* {purchaseIndenter.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))} */}
                      </TextField>

                    </div>
                    <div className="col-3" aria-expanded="false">

                      <TextField
                        id="itemType"
                        variant="outlined"
                        label="Floor No."
                        fullWidth

                      // value={EmployeeFormData.dept}
                      // name="dept"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.dept}
                      // helperText={errors.dept || ''} 
                      >

                      </TextField>

                    </div>
                    <div className="col-3 pb-4" aria-expanded="false">

                      <TextField
                        id="consumerName"
                        name="consumerName"
                        value={userComplaintFormData.consumerName}
                        onChange={handleChange}
                        variant="outlined"
                        label="Consumer name"
                        fullWidth

                      // value={EmployeeFormData.dept}
                      // name="dept"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.dept}
                      // helperText={errors.dept || ''} 
                      // SelectProps={{
                      //   MenuProps: {
                      //     PaperProps: {
                      //       style: {
                      //         maxHeight: 160,
                      //         maxWidth: 100 // Set the maximum height for the menu
                      //       },
                      //     },
                      //   },
                      // }}
                      >

                      </TextField>

                    </div>


                    <div class="col-9">
                      <TextField
                        variant='outlined'
                        id="complaintDescription"
                        label="Subject "
                        name="complaintDescription"
                        value={userComplaintFormData.complaintDescription}
                        onChange={handleChange}
                        helperText={"Maximum Character : 150"}
                        fullWidth

                      // value={EmployeeFormData.fname}
                      // name="fname"
                      // variant="outlined"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.fname}
                      // helperText={errors.fname || ''}
                      />
                    </div>

                    <div class="col">
                      <TextField
                        variant='outlined'
                        multiline
                        rows={3}
                        id="problemDescription"
                        name="problemDescription"
                        value={userComplaintFormData.problemDescription}
                        label="Project Description"
                        onChange={handleChange}
                        fullWidth

                      // value={EmployeeFormData.mname}
                      // name="mname"
                      // variant="outlined"
                      // onChange={handleInputChangeEmployeeData}
                      // error={!!errors.mname}
                      // helperText={'To Date'}
                      />
                    </div>

                    
                    <div className="row justify-content-md-center mt-2">
                      <button className=' col-4 btn btn-warning'
                        type='submit'
                        // onClick={handleSearch}
                        // onClick={handleClick}
                        disabled={isLoading}
                      >
                        Raise a Query
                       

                      </button>
                      <div >

                        <Snackbar open={isLoading} onClose={handleLoadingClose}>
                          <Alert
                            onClose={handleClose}
                            severity="warning"
                            variant="filled"
                            sx={{ width: '100%' }}
                          >
                            Query is being send!
                          </Alert>
                        </Snackbar>

                        <Snackbar open={open} onClose={handleClose}>
                          <Alert
                            onClose={handleClose}
                            severity="success"
                            variant="filled"
                            sx={{ width: '100%' }}
                          >
                            Query has been raised successfully!
                          </Alert>
                        </Snackbar>



                      </div>

                    </div>
                  </div>
                </Form >
              </div>

            </CardContent>
          </Card>
        </div>
        {/* <div>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
            Bottom-Right
          </Button>
        </Grid>
      </div> */}
      </div>
    )

  }

  export default UserLoginDashboard
