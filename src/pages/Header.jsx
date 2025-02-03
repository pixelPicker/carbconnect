import React from "react";
import { TfiLink } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
function Header() {
  const { user, loading, error } = useSelector((state) => state.auth);

  console.log(user);
  return (
    <header className="flex items-center  absolute top-2 font-Outfit left-1/2 -translate-x-1/2  justify-between w-full !px-4 !py-2">
      <div className="flex items-center !pt-1 font-RubikDoodleShadow text-3xl font-extrabold">
        <h1 className="text-[30px]">Carb</h1>
        <TfiLink className="text-[30px]" />
        <h1 className="text-[30px] text-cyan-950">Connect</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-16 !py-2 !px-4">
          <NavLink className={({ isActive }) => isActive ? "text-black" : "text-gray-700 hover:text-gray-800"} to={'/'}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-black" : "text-gray-700 hover:text-gray-800"} to={'calculator'}>Calculator</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-black" : "text-gray-700 hover:text-gray-800"} to={'blog'}>Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-black" : "text-gray-700 hover:text-gray-800"} to={'shop'}>Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-black" : "text-gray-700 hover:text-gray-800"} to={'forum'}>Forum</NavLink>
        </ul>
      </nav>
      {
        (user)
          ?
          <Link to='/profile'>
            <section className="flex gap-2 !px-2 !py-1 rounded-sm items-center bg-green-950 text-white">
              <FaUser />
              {user.userName}
            </section>
          </Link>
          :
          <section className="flex gap-2">
            <Link to={'/signup'} className="cursor-pointer text-gray-300 hover:text-gray-100 bg-green-950 hover:bg-green-800 active:bg-green-700 transition delay-75 duration-300 rounded-lg !px-4 !py-1">Signup</Link>
            <Link to={'/signin'} className="cursor-pointer text-green-800 bg-transparent border-2 border-green-80 transition delay-75 duration-300 rounded-lg !px-4 !py-1">Signin</Link>
          </section>
      }

    </header>
  );
}

export default Header;
