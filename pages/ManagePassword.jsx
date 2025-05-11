import React from 'react'
import NavbarComponent from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Button, Paper, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Label } from '@mui/icons-material';

function ManagePassword() {
    return (
        <div>
            <div>
                <div >
                    <div>
                        {/* Navbar */}
                        <NavbarComponent />
                    </div>

                    <div className='d-flex ' >
                        <div style={{ "maxWidth": "30rem" }}>
                            <SideBar />
                        </div>
                        < div className=' d-flex flex-column  px-5' style={{ "width": "100rem", marginTop: "2rem" }}>
                            <div className='align-self-center d-flex flex-column' style={{ width: "40rem" }}>
                                <Paper className="justify-content-center" elevation={3} style={{ backgroundColor: "#9C9C9C", borderRadius: "10px", height: "3rem", marginBottom: "2rem" }}>
                                    <p style={{ color: "white", fontWeight: 600, margin: "10px 0px 10px 10px" }}>Change Your Password :</p>
                                </Paper>

                                <div className=''>


                                    <Paper elevation={5} style={{ width: "100%" }}>
                                        <div className='d-flex justify-content-evenly flex-column p-3 '>
                                            {/* <div className='col-3 text-center'>
                                            <Typography>Call ID :</Typography>
                                        </div> */}
                                            <div className='  mt-3 '>
                                                <div className='col-4 align-center'>
                                                    <span> Old Password :</span>
                                                </div>
                                                <div className='col'>
                                                    <TextField
                                                        fullWidth
                                                    />
                                                </div>

                                            </div>
                                            <div className="mt-3">
                                                <div className='col-4 align-center'>
                                                    <span> New Password :</span>
                                                </div>
                                                <div className='col'>
                                                    <TextField

                                                        fullWidth

                                                    >

                                                    </TextField>
                                                </div>

                                            </div>
                                            <div className="mt-3 ">
                                                <div className='col-4 align-center'>
                                                    <span> Confirm Password :</span>
                                                </div>
                                                <div className='col'>
                                                    <TextField

                                                        fullWidth

                                                    >

                                                    </TextField>
                                                </div>

                                            </div>
                                        </div>


                                    </Paper>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* SideBar */}


                </div>
            </div>
        </div>
    )
}

export default ManagePassword
