import React from 'react'
import NavbarComponent from '../components/Navbar'
import SideBar from '../components/SideBar'
import NewCall from './NewCall'
import { Paper, Typography } from '@mui/material'


const AdminDashboard = () => {



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
                            <p style={{  color:"white",fontWeight :600, margin :"10px 0px 10px 10px"}}>New Project Details :</p>
                        </Paper>
                    
                    <NewCall />
                </div>
            </div>
            {/* SideBar */}


        </div>
    )
}

export default AdminDashboard
