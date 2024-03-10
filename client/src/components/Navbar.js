import React,{useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#007bff' }}>
      <Toolbar disableGutters>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Left side: Logo and Login/Signup */}
          <Grid item xs={2} display="flex" alignItems="center">
            <IconButton size="large" color="inherit" aria-label="menu">
              {/* Replace with your custom logo component */}
              <Typography variant="h6" component="div" sx={{ marginRight:5, color: 'white' }}>
                Stockstalk
              </Typography>
              <Button variant="text" color="inherit" component={Link} to='/'sx={{ marginRight: 2, color: 'white' }}>
              Home
            </Button>
            <Button variant="text" color="inherit" component={Link} to='/about' sx={{ marginRight: 2, color: 'white' }}>
              About
            </Button>
            <Button variant="text" color="inherit" component={Link} to='/price'sx={{ color: 'white' }}>
              Pricing
            </Button>
            <Button variant="text" color="inherit"  sx={{ color: 'white' }}>
              Stocks
            </Button>
            <Button variant="text" color="inherit" component={Link} to='/trade'sx={{ color: 'white' }}>
              Trade
            </Button>
            <Button variant="text" color="inherit" component={Link} to='/heatmap'sx={{ color: 'white' }}>
              Heatmap
            </Button>


            </IconButton>
           
          </Grid>

          {/* Right side: Navigation links */}
          <Grid item xs={10} display="flex" justifyContent="flex-end">
            <Button variant="text" component={Link} to='/login' color="inherit" sx={{ marginLeft: 1, color: 'white' }}>
              Login
            </Button>
            <Button variant="outlined" component={Link} to='/register' color="inherit" sx={{ marginLeft: 1 }}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
