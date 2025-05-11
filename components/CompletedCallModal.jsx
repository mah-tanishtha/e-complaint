import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Snackbar from '@mui/material/Snackbar';
import { TextField } from '@mui/material';
import Popover from '@mui/material/Popover';




import { Modal, Table } from 'react-bootstrap';
import Link from '@mui/material/Link';




function CompletedCallModal({ modal, toggle }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <div  >
            <Modal show={modal} onHide={toggle} size="xl" centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Call Details :</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table bordered>

                        <tbody>
                            <tr>
                                <th scope="row">
                                    Call Id :
                                </th>
                                <td>
                                    112
                                </td>
                                <th scope="row">
                                    Section :
                                </th>
                                <td>
                                    Infra 1
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Consumer Name :
                                </th>
                                <td>
                                    Raha
                                </td>
                                <th scope="row">
                                    Created On:
                                </th>
                                <td>
                                    12/12/2024
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Inter-Comm No. :
                                </th>
                                <td>
                                    222
                                </td>
                                <th scope="row">
                                    Status:
                                </th>
                                <td>
                                    Approved
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Assigned By :
                                </th>
                                <td>
                                    Meera
                                </td>
                                <th scope="row">
                                    Assigned On:
                                </th>
                                <td>
                                    12/12/2024
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Assigned To :
                                </th>
                                <td>
                                    Amay
                                </td>
                                <th scope="row">
                                    Complaint Subject:
                                </th>
                                <td>

                                    <p>Netwroking Problem</p>
                                    <Typography
                                        aria-owns={open ? 'mouse-over-popover' : undefined}
                                        aria-haspopup="true"
                                        color="primary"
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >
                                        DESCRIPTION
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
                                        <Typography sx={{ p: 1 }}>Description is here</Typography>
                                    </Popover>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">
                                    Completed By :
                                </th>
                                <td>
                                    Ahaara
                                </td>
                                <th scope="row">
                                    Completed On:
                                </th>
                                <td>
                                    12/12/2024
                                </td>
                            </tr>
                            <tr rowSpan={2}>
                            <th scope="row" >
                                    Solution Description :
                                </th>
                                <td colSpan={3}>
                                    <TextField
                                        fullWidth
                                        disabled 
                                        value="Solution is here"
                                        multiline
                                        rows={3}
                                        >
                                       
                                        
                                        
                                    </TextField>
                                </td>
                            </tr>

                            <tr rowSpan={2}>
                                <th scope="row" >
                                    Remarks
                                </th>
                                <td colSpan={3}>
                                    <TextField
                                        fullWidth
                                        label="Enter any remarks"
                                        multiline
                                        rows={3}>
                                       

                                    </TextField>
                                </td>

                            </tr>
                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CompletedCallModal
