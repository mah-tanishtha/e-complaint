import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Styles/HoverStyle.css'
import CallDetailModal from '../components/CallDetailModal';
import ResolverCallDetailModal from '../components/ResolverCallDetailModal';
import Snackbar from '@mui/material/Snackbar';
import { useParams } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



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







function ResolverInbox() {

    const username = useParams()

    const [modal, setShowModal] = useState(false)


    console.log("username",username)

    const handleShow = () => {
        setShowModal(!modal)
    }

    return (
        <div>
            <div>
                <TableContainer component={Paper} elevation={5}>
                    <Table aria-label="customized table">
                        <TableHead style={{ backgroundColor: "#9C9C9C" }}
                        >
                            <TableRow >
                                <StyledTableCell component="th" scope="row">
                                    Call ID
                                </StyledTableCell>
                                <StyledTableCell align="right">Section</StyledTableCell>
                                <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                <StyledTableCell align="right">Assigned On</StyledTableCell>
                                <StyledTableCell align="right">Inter-Com no.</StyledTableCell>
                                <StyledTableCell align="right">Complaint Subject</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <StyledTableRow className='ele' onClick={handleShow}>
                                <StyledTableCell component="th" scope="row"   >
                                    Call ID
                                </StyledTableCell>
                                <StyledTableCell align="right"  >Section</StyledTableCell>
                                <StyledTableCell align="right"  >Consumer Name</StyledTableCell>
                                <StyledTableCell align="right" >Assigned On</StyledTableCell>
                                <StyledTableCell align="right" >Inter-Com no.</StyledTableCell>
                                <StyledTableCell align="right"  >Complaint Description</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow className='ele' onClick={handleShow}>
                                <StyledTableCell component="th" scope="row">
                                    Call ID
                                </StyledTableCell>
                                <StyledTableCell align="right">Section</StyledTableCell>
                                <StyledTableCell align="right">Consumer Name</StyledTableCell>
                                <StyledTableCell align="right">Assigned On</StyledTableCell>
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



                {/* <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
                {
                    modal && <ResolverCallDetailModal modal={modal} toggle={handleShow} />
                }

            </div >
        </div>
    )
}

export default ResolverInbox
