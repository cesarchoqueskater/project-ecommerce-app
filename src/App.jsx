import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Body from './components/Body'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Body />}></Route>
        <Route path="/culture/:name" element={< Body />}></Route>
        <Route path="/culture/detail/:id" element={< ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
