import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import gmdaLogo from '../Images/gmdalogo.jpg'
import Image2 from '../Images/Image2.jpeg'
import image3 from '../Images/image3.jpeg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpeg'
import image7 from '../Images/image7.webp'
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import '../landingPage/LandingPageStyles/LandingPage.css'
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function LandingPage() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const fullContainerStyle = {
        width :"100vw",
        height:"100vh"
    }
    return (
        <div style={fullContainerStyle}>
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
                        <PopupState variant="popper" popupId="demo-popup-popper">
                            {(popupState) => (
                                <div>
                                    <Button 
                                    style={{"background-color" :"#9C9C9C"}} 
                                    variant="contained" 
                                    {...bindToggle(popupState)}>
                                        Login
                                    </Button>
                                    <Popper className='mt-1' {...bindPopper(popupState)} transition>
                                        {({ TransitionProps }) => (
                                            <Fade {...TransitionProps} timeout={350}>
                                                <Paper>
                                                    <Typography className='d-flex flex-column' sx={{ p: 2 }}>
                                                        <button onClick={ ()=>navigate("/signin")} type="button" class="btn btn-warning">Sign In</button>
                                                        <span >New User? <Link to="/signup">Click Here</Link></span>
                                                    </Typography>
                                                </Paper>
                                            </Fade>
                                        )}
                                    </Popper>
                                </div>
                            )}
                                        </PopupState>
                    </Nav.Link> 
                    {/* <Nav.Link href="/signin" className='text-white'>Sign In</Nav.Link>
                    <Nav.Link href="/signup" className='text-white px-4'>Sign Up</Nav.Link> */}
                </div>
                {/* </Container> */}
            </Navbar>
            <div >
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            width="100%"
                            height="520"
                            src={Image2}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>

                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-80"
                            src={image3}
                            width="100%"
                            height="520"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image4}
                            width="100%"
                            height="520"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image5}
                            width="100%"
                            height="520"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image7}
                            width="100%"
                            height="520"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                </Carousel>
                <div className=" d-flex flex-column overlay overlay_2 text-white">

                    <h1>Welcome </h1>
                    <h2>We are here to address your query by 24/7 !</h2>


                    {/* <h3>24/7</h3> */}
                </div>
            </div>
        </div>
    )
}

export default LandingPage
