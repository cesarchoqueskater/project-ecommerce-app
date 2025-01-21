//import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cartContext';
import Item from './Item'

function ItemListContainer({ items }) {

  const context = useContext(CartContext)

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