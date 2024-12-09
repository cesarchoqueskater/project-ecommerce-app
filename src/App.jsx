import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {

  return (
      <div>
        <Navbar/>
        <ItemListContainer textAlign="center" textInformation="Proximamente"/>
      </div>
  )
}

export default App
