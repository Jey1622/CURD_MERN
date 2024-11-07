import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavigateBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>React Auth</Typography>
        <Box>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavigateBar