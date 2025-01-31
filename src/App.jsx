import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './pages/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App
