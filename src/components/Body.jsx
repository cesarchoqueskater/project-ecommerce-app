import * as React from 'react';

import ItemListContainer from './ItemListContainer'

function CardWidget() {

  return (
    <div className="container mt-4">
        <ItemListContainer textInformation="Proximamente"/>
    </div>
        
  );
}
export default CardWidget;

//  <ItemListContainer textAlign="center" textInformation="Proximamente"/> */