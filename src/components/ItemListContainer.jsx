//import * as React from 'react';
import { useState, useEffect } from 'react'
import Item from './Item'

function ItemListContainer({ items }) {

  return (
    <div className="grid-container">
      {
        items.map((item) => (
          <div key={item} className="grid-item">
            <Item item={item} />
          </div>
        ))}
    </div>
  );
}
export default ItemListContainer;