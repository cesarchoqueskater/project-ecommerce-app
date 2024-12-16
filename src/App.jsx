import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import './App.css'

function App() {

  return (
      <div>
        <Navbar/>
        <Body/>
      </div>
  )
}

export default App
