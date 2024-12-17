//import * as React from 'react';
import { useState, useEffect } from 'react'
import Item from './Item'

function ItemListContainer({ items }) {

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
      {
        items.map((item) => (
          <div key={item} className="col">
            <Item item={item} />
          </div>
        ))}
    </div>
  );
}
export default ItemListContainer;