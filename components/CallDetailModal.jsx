import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem, TextField } from '@mui/material';
import Popover from '@mui/material/Popover';
import { Modal, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addAssignedToDetail } from '../Redux/Slices/AssignedToStaffSlice';





function CallDetailModal({ modal, toggle, data }) {
    const [CallfetchedDataWithId, setCallfetchedDataWithId] = React.useState({})
    const [SelectedAssignedToValues, setSelectedAssignedToValues] = React.useState([])
    // const [loading, setIsLoading] =

    // React.useEffect(() => {
    //     if (modal) {
    //         fetch(`http://172.16.12.35:9393/api/v1/complaint/${id}`)
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error("Network Error");
    //                 }
    //                 else {
    //                     return response.json()
    //                 }

    //             })
    //             .then((data) => {
    //                 setCallfetchedDataWithId(data)
    //                 console.log("new call data", data)
    //             })
    //             .catch((error) => {
    //                 console.log("Error :", error)
    //             })
    //     }

    // }, [modal])
    const [anchorEl, setAnchorEl] = React.useState(null);

    React.useEffect(() => {
        if (modal) {
            fetch("http://192.168.0.169:9393/api/v1/supportstaff/")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network Error");
                    }
                    else {
                        return response.json();
                    }
                })
                .then((data) => {
                    setSelectedAssignedToValues(data)
                    console.log("Staff Data", data)
                })
                .catch((error) => {
                    console.log("Error :", error)
                })
        }

    }, [modal])


    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    console.log("Section id",data.sectionId)
    const open = Boolean(anchorEl);
    console.log("Selected Data Sending,",data)
    //Sending values to DB
    const [AssignedValues, setAssignedValues] = useState({
        ...data,
        "supportstaff": {
            "ssId": 0,
            "name": ""
        },
        "remarks": "",
        "section" : {
            "sectionId" : data.sectionId,
            "sectionName" :data.sectionName
        },
        
        
    })


    const handleChange = (e) => {
        const date = new Date().toISOString().split('T')[0];



        if (e.target.name === "assignedTo") {
            const selectedName = e.target.value;
            const selectedStaff = SelectedAssignedToValues.find(option => option.name === selectedName);

            if (selectedStaff) {
                // Update AssignedValues state with the selected name and ssid
                setAssignedValues(prevState => ({
                    ...prevState,
                    supportstaff : {
                        ...prevState.supportstaff,
                        name : selectedName,
                        ssId : selectedStaff.ssId
                    },
                    
                    "assignedOn": date // You may want to include this outside the conditional if you always want to update it
                }));
            } else {
                console.log("No staff member found for selected name.");
            }
        } else {
            // For other fields, simply update the state
            setAssignedValues(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
                "assignedOn": date // You may want to include this outside the conditional if you always want to update it
            }));
        }
}

// console.log("Time now",new Date().toISOString())
const dispatch = useDispatch()

const handleNewCallAssignedToSend = (complaintId) => {
    // //sending the staff if 
    // const [assignedTo,assignedToId] = AssignedValues.assignedTo.split(":")
    // setAssignedValues((prevState)=>({
    //     ...prevState,
    //     "assignedTo" : assignedTo,
    //     "assignedToId" : assignedToId
    // }))

    //sending the assigned to info
    dispatch(addAssignedToDetail({ AssignedValues, complaintId }))

    
}
return (
    <div >
        <Modal show={modal} onHide={toggle} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Call Details :</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <tbody>
                        <tr >
                            <th scope="row">
                                Project Id :
                            </th>
                            <td>
                                {data.complaintId}
                            </td>
                            <th scope="row">
                                Section :
                            </th>
                            <td>
                                {data.sectionName}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Consumer Name :
                            </th>
                            <td>
                                {data.consumerName}
                            </td>
                            <th scope="row">
                                Created On:
                            </th>
                            <td>
                                {/* {CallfetchedDataWithId['createdOn'] && typeof CallfetchedDataWithId['createdOn'] === 'string' ? CallfetchedDataWithId['createdOn'].split('T')[0] : 'Invalid Date'} */}
                                {data.createdOn}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Inter-Comm No. :
                            </th>
                            <td>
                                {data.intercom}
                            </td>
                            <th scope="row">
                                Status:
                            </th>
                            <td>
                                {data.statusId}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Project Subject:
                            </th>
                            <td colSpan={3}>
                                {/* <p>{CallfetchedDataWithId['complaintDescription']}</p> */}
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
                                    <Typography sx={{ p: 1 }}>{data.complaintDescription}</Typography>
                                </Popover>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row" rowspan={1}>
                                Assigned To :
                            </th>
                            <td colSpan={3}>
                                <TextField
                                    id="assignedTo"
                                    name="assignedTo"
                                    value={AssignedValues.supportstaff.name}
                                    select
                                    fullWidth
                                    label="Select from below"
                                    onChange={handleChange}

                                >
                                    {
                                        SelectedAssignedToValues.map((option, index) => (
                                            <MenuItem key={index} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </td>
                        </tr>
                        {/* <tr>
                            <th scope="row" rowspan={1}>
                                Assigned By :
                            </th>
                            <td colspan={3}>
                                <TextField
                                    id="assignedBy"
                                    name="assignedBy"
                                    value={AssignedValues.assignedBy}
                                    select
                                    fullWidth
                                    label="Select from below"
                                    onChange={handleChange}


                                >
                                    {
                                        SelectedAssignedToValues.map((option, index) => (
                                            <MenuItem key={index} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </td>
                        </tr> */}

                        <tr>
                            <th scope="row" rowSpan={2}>
                                Remarks
                            </th>
                            <td colSpan={3}>
                                <TextField
                                    fullWidth
                                    id="remarks"
                                    name="remarks"
                                    value={AssignedValues.remarks}
                                    label="Enter any remarks"
                                    multiline
                                    rows={2}
                                    onChange={handleChange}>
                                </TextField>
                            </td>

                        </tr>

                    </tbody>
                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>handleNewCallAssignedToSend(data.complaintId)}>
                    Send
                </Button>
                <Button variant="secondary" onClick={toggle}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    </div>
)
}

export default CallDetailModal
