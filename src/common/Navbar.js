import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoImage from './logo.png';
import { Link } from 'react-scroll';
import { Link as PageLink} from "react-router-dom";
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
});

// ... (existing imports)

const Navbar = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <PageLink to="/">
          <IconButton edge="start" color="inherit" aria-label="home">
            <img src={LogoImage} alt="Logo" style={{ width: '200px', height: '64px', marginRight: '30px' }} />
          </IconButton>
        </PageLink>
        <div style={{ flexGrow: 1 }}></div>

        <PageLink to="/" smooth={true} duration={500} offset={-64} style={linkStyles}>
          <Button color="inherit">Home</Button>
        </PageLink>
        {/* Update the "About Us" button to scroll down to the middle of the page */}
        <PageLink to="/" smooth={true} duration={500} offset={-32} style={linkStyles}>
          <Button color="inherit">About Us</Button>
        </PageLink>

        {/* For "Contact Us" to scroll down to the end of the screen */}
        <Link to="contact" smooth={true} duration={500} offset={-64} style={linkStyles}>
          <Button color="inherit">Contact Us</Button>
        </Link>

        <PageLink to="/login" style={{ textDecoration: 'none' }}>
          {/* Change the text to "Login" and remove underline */}
          <Button variant="outlined" color="inherit" href="#" style={{ ...signUpButtonStyles, textDecoration: 'none' }}>
            Login
          </Button>
        </PageLink>
      </Toolbar>
    </StyledAppBar>
  );
};

// ... (rest of the code)

const linkStyles = {
  color: 'black',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  textDecoration: 'none',
  marginLeft: '20px',
};

const signUpButtonStyles = {
  display: 'flex',
  width: 'fit-content',
  height: '37px',
  padding: '10px 20px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '45px',
  border: '1px solid #FCCD3D',
  color: 'black',
  textDecoration: 'none',
};

export default Navbar;
