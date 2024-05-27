import React, { useState } from 'react'
import './App.css'
import Countr from './components/Countr'
import Header from './components/Header'
import InputBar from './components/InputBar'

const App = () => {
  return (
    <div className='max-w-[1550px] mx-auto'>
      <div className='w-[90%] mx-auto'>
        <Header />
        <InputBar/>
        <Countr />
      </div>
    </div>
  )
}

export default App
