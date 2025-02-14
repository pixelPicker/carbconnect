import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './pages/Header'
import { getUser } from './features/auth/authThunk';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';


function App() {
  const dispatch = useDispatch();
  const [isPersistent, setIsPersistent] = useState(false);
  

  useEffect(() => {
    // navigator.storage.persist().then(persistent => {
    //   console.log(persistent ? "Persistent storage granted" : "Not persistent");
    // });

    const checkStoragePersistence = async () => {
      if (navigator.storage && navigator.storage.persist) {
        const isPersisted = await navigator.storage.persist();
        console.log(`Persisted storage granted: ${isPersisted}`);
      }
      setIsPersistent(isPersistent);

    };

    checkStoragePersistence();

    const checkUser = async () => {
      const user = await getUser()
      console.log("user: ", user);
      if (user) {
        dispatch(setUser(user))
      }
    }
    checkUser()
  }, [dispatch])
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App
