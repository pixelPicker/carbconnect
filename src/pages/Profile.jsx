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
      <img src={"src/assets/images/idk.jpg"} className="absolute sm:static brightness-60 sm:brightness-100 top-0 left-0 max-w-screen w-screen h-screen sm:max-h-screen min-h-screen object-cover sm:w-1/2" />
      <div className="flex flex-1 justify-center text-white items-center flex-col z-10">
        <h1 className="font-RubikDoodleShadow sm:text-cyan-950 text-8xl !pb-2">{user.userName}</h1>
        <h1 className="font-Bricolage text-2xl sm:text-cyan-950 !pb-3">{user.email}</h1>
        <div className="flex gap-2">
          <button className=" !px-4 bg-green-950 hover:bg-green-800 active:bg-green-700 transition-all duration-300 text-white font-Bricolage text-xl shadow-lg rounded-lg" onClick={userLogout}>Logout</button>
          <Link to={-1} className="!py-2 !px-4 bg-green-950 hover:bg-green-800 active:bg-green-700 transition-all duration-300 text-white font-Bricolage text-xl shadow-lg rounded-lg">Go back</Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
