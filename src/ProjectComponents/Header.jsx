import React from "react";
import { TfiLink } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center text-gray-200 absolute top-2 font-Outfit left-1/2 -translate-x-1/2  justify-between w-full !px-4 !py-2">
      <div className="flex items-center !pt-1 font-CornerStone text-3xl font-bold">
        <h1 className="text-[30px]">Carb</h1>
        <TfiLink className="text-[30px]" />
        <h1 className="text-[30px] text-purple-700">Connect</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-16 !py-2 !px-4">
          <NavLink className={({isActive}) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-300"} to={'/'}>Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-300"} to={'calculator'}>Calculator</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-300"} to={'blog'}>Blog</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-300"} to={'shop'}>Shop</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-300"} to={'forum'}>Forum</NavLink>
        </ul>
      </nav>
      <section className="flex gap-2">
        <button className="text-gray-300 hover:text-gray-100 bg-linear-to-b from-40% to-purple-700/50 hover:to-purple-500/50 active:to-purple-500/80 hover:from-20% transition delay-75 duration-300 rounded-lg !px-4 !py-1">Signup</button>
        <button className="text-gray-300 hover:text-gray-100 bg-linear-to-b from-40% to-purple-700/50 hover:to-purple-500/50 active:to-purple-500/80 hover:from-20% transition delay-75 duration-300 rounded-lg !px-4 !py-1">Signin</button>
      </section>
    </header>
  );
}

export default Header;
