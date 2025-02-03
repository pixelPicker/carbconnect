// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const navigate = useNavigate()

// export default ProtectedRoute= () => {
//   const {user} = useSelector((state) => state.auth);

//   return user ? <Outlet /> : navigate('/signin')
// }


import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProtectedRoutes() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin')
    };

  }, []);

  return <Outlet />
}

export default ProtectedRoutes;
