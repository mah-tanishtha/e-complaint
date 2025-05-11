import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import gmdaLogo from '../Images/gmdalogo.jpg'
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
    const navigate = useNavigate();

    const logout_user = () => {
        navigate("/")
    }
    return (
        <div>
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
                        {/* <Nav.Link href="/signin" className='text-white'>Sign In</Nav.Link>
    <Nav.Link href="/signup" className='text-white px-4'>Sign Up</Nav.Link> */}
                    </div>
                    {/* </Container> */}
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarComponent
