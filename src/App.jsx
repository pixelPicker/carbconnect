import { useState } from 'react'
import Header from './ProjectComponents/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App
