import * as React from 'react';


function ItemListContainer(props) {

  return (
    <div class="alert alert-primary" role="alert">
      {props.textInformation}
    </div>
  );
}
export default ItemListContainer;