import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';


function CardWidget() {

  return (
        <Box>
            <IconButton size="large" aria-label="show 4 new products" color="inherit">
              <Badge badgeContent={4} color="error">
                <AddBusinessIcon />
              </Badge>
            </IconButton>
          </Box>
  );
}
export default CardWidget;
