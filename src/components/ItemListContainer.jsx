import * as React from 'react';
import Typography from '@mui/material/Typography';


function ItemListContainer(props) {

  return (
    <Typography variant={{ textAlign: props.textAlign}}>{props.textInformation}</Typography>
  );
}
export default ItemListContainer;
