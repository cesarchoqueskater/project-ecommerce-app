import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CardWidget from './CardWidget'

const pages = ['Mochica', 'Nazca', 'Wiru'];

function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Box>
        <CardWidget/>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
export default Navbar;
