import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './pages/Header'
import { getUser } from './features/auth/authThunk';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.storage.persist().then(persistent => {
      console.log(persistent ? "Persistent storage granted" : "Not persistent");
    });

    const checkUser = async () => {
      const user = await getUser()
      console.log("user: ", user);
      if (user) {
        dispatch(setUser(user))
      }
    }
    checkUser()
  }, [])
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App
