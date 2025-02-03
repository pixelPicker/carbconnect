import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAllUsers } from "../features/auth/authThunk";
import { deleteAllLogs } from "../features/logging/logThunk";
function Profile() {
  const { user, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogout = () => {
    dispatch(deleteAllUsers())
    dispatch(deleteAllLogs())
    navigate('/');
  }
  return (
    <section className="flex justify-center overflow-hidden items-center min-h-screen">
      <img src={"src/assets/images/idk.jpg"} className="max-h-screen min-h-screen object-cover w-1/2" />
      <div className="flex flex-1 justify-center items-center flex-col ">
        <h1 className="font-RubikDoodleShadow text-cyan-950 text-8xl !pb-2">{user.userName}</h1>
        <h1 className="font-Bricolage text-2xl !pb-3">{user.email}</h1>
        <button className="!py-2 !px-4 bg-green-950 hover:bg-green-800 active:bg-green-700 transition-all duration-300 text-white font-Bricolage text-xl shadow-lg rounded-lg" onClick={userLogout}>Logout</button>
      </div>
    </section>
  );
}

export default Profile;
