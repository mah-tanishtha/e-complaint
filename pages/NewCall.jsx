import React, { useEffect, useState } from 'react'
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
import { TableFooter, TablePagination } from '@mui/material';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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



function NewCall() {

    const [newCallDbData, setNewCallDbData] = useState([])


    useEffect(() => {
        fetch("http://192.168.0.169:9393/api/v1/complaint/complaintsection")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Error")

                }
                else {
                    // console.log("Inbox Respo",response.json())
                    return response.json()
                }


            }).then((data) => {
                setNewCallDbData(data)
                console.log("DB Data", data)

            })
            .catch((error) => {
                console.error("Error", error)
            })
    }, [])

    const [modal, setShowModal] = useState(false)
    const [SelectedData, setSelectedData] = useState(null)


    const handleShow = (data) => {
        setShowModal(!modal);
        setSelectedData(data);
    }

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };



    return (
        <div>
            <TableContainer component={Paper} elevation={5}>
                <Table aria-label="customized table">
                    <TableHead style={{ backgroundColor: "#9C9C9C" }}
                    >
                        <TableRow >
                            <StyledTableCell component="th" scope="row">
                                Project ID
                            </StyledTableCell>
                            <StyledTableCell align="right">Section</StyledTableCell>
                            <StyledTableCell align="right">Consumer Name</StyledTableCell>
                            <StyledTableCell align="right">Created On</StyledTableCell>
                            <StyledTableCell align="right">Inter-Com no.</StyledTableCell>
                            <StyledTableCell align="right">Project Subject</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            newCallDbData.map((data, index) => {
                                return <>
                                    <StyledTableRow className='ele' key={data.index} onClick={() => handleShow(data)}>
                                        <StyledTableCell component="th" scope="row"   >
                                            {data.complaintIdVisible}
                                        </StyledTableCell>
                                        <StyledTableCell align="right"  >{data.sectionName}</StyledTableCell>
                                        <StyledTableCell align="right"  >{data.consumerName}</StyledTableCell>
                                        <StyledTableCell align="right" >{data.createdOn.split('T')[0]}</StyledTableCell>
                                        <StyledTableCell align="right" >{data.intercom}</StyledTableCell>
                                        <StyledTableCell align="right"  >{data.complaintDescription}</StyledTableCell>
                                    </StyledTableRow>

                                </>

                            })
                        }
                        {
                            modal && <CallDetailModal modal={modal} toggle={handleShow} data={SelectedData} />
                        }

                    </TableBody>
                    {/* <TableFooter >
                        <TableRow>
                            {/* <StyledTableCell component="th" scope="row" colSpan={6} sx={{marginTop :"0px"}}>
                                <Stack spacing={2} display="flex" flexDirection="row" justifyContent="space-between">
                                    <Typography alignSelf={'center'}>Page: {page}</Typography>
                                    <Pagination alignSelf={'center'} count={10} page={page} onChange={handleChange} />
                                </Stack>
                            </StyledTableCell> */}
                            {/* <TablePagination rowsPerPageOptions={[10, 50]}></TablePagination>

                        </TableRow>

                    </TableFooter> */} 
                </Table>
            </TableContainer>


        </div >
    )
}

export default NewCall
