import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import CardWidget from './CardWidget'

const pages = ['Mochica', 'Nazca', 'Wiru'];


function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Piruw Rpuwlika
        </Typography>
        {pages.map((page) => (
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
        <Box>
            <CardWidget/>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default Navbar;
