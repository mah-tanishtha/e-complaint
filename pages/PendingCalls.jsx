import React ,{useState} from 'react'
import NavbarComponent from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Styles/HoverStyle.css'
import PendingCallModal from '../components/PendingCallModal';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function PendingCalls() {

    const [modal, setShowModal] = useState(false)

    const handleShow = () => {
        setShowModal(!modal)
    }


    return (
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
                    < div className=' d-flex flex-column px-5' style={{ "width": "100rem", marginTop: "5rem" }}>

                        <Paper elevation={3} style={{ backgroundColor: "#9C9C9C", borderRadius: "10px", maxWidth: "100%", marginBottom: "2rem" }}>
                            <p style={{ color: "white", fontWeight: 600, margin: "10px 0px 10px 10px" }}>Pending Project Calls Details :</p>
                        </Paper>

                        <div>
                            <TableContainer component={Paper} elevation={5}>
                                <Table aria-label="customized table">
                                    <TableHead style={{ backgroundColor: "#9C9C9C" }}
                                    >
                                        <TableRow>
                                            <StyledTableCell component="th" scope="row">
                                                Project ID
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Section</StyledTableCell>
                                            <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                            <StyledTableCell align="right">Assigned On</StyledTableCell>
                                            <StyledTableCell align="right">Assigned To</StyledTableCell>
                                            <StyledTableCell align="right">Complaint Subject</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <StyledTableRow className='ele' onClick={handleShow}>
                                            <StyledTableCell component="th" scope="row">
                                                Call ID
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Section</StyledTableCell>
                                            <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                            <StyledTableCell align="right">Created On</StyledTableCell>
                                            <StyledTableCell align="right">Inter-Com no.</StyledTableCell>
                                            <StyledTableCell align="right">Complaint Description</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow className='ele' onClick={handleShow}>
                                            <StyledTableCell component="th" scope="row">
                                                Call ID
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Section</StyledTableCell>
                                            <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                            <StyledTableCell align="right">Created On</StyledTableCell>
                                            <StyledTableCell align="right">Inter-Com no.</StyledTableCell>
                                            <StyledTableCell align="right">Complaint Description</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow className='ele' onClick={handleShow}>
                                            <StyledTableCell component="th" scope="row">
                                                Call ID
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Section</StyledTableCell>
                                            <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                            <StyledTableCell align="right">Created On</StyledTableCell>
                                            <StyledTableCell align="right">Inter-Com no.</StyledTableCell>
                                            <StyledTableCell align="right">Complaint Description</StyledTableCell>
                                        </StyledTableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>



                        </div>
                    </div>
                </div>
                {/* SideBar */}

                {modal && <PendingCallModal modal={modal} toggle={handleShow} />}
            </div>
        </div>
    )
}

export default PendingCalls
