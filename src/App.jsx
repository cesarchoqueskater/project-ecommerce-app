import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Body from './components/Body'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import OrderCheckout from './components/OrderCheckout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Body />}></Route>
        <Route path="/culture/:name" element={< Body />}></Route>
        <Route path="/culture/detail/:id" element={< ItemDetailContainer />}></Route>
        <Route path="/cart" element={< Cart />}></Route>
        <Route path="/checkout/order" element={< OrderCheckout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
