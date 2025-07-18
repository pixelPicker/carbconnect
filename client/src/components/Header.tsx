import {
  Bars2Icon,
  LinkIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from '@tanstack/react-router'
import React, { useState } from 'react'

function Header() {
  const [sideBarPosition, setSideBarPosition] = useState('bottom-full')

  const [user, setUser] = useState(false)

  const openSideBar = () => {
    setSideBarPosition('top-0')
  }
  const closeSideBar = () => {
    setSideBarPosition('bottom-full')
  }

  return (
    <header className="flex z-40 items-center bg-cyan-950/50 shadow-lg backdrop-blur-[2px] fixed top-0 font-Outfit left-1/2 -translate-x-1/2  justify-between w-screen sm:px-4  py-2 ">
      <div className="flex items-center gap-2 pl-4  sm:pl-0 pt-1  font-RubikDoodleShadow text-3xl font-extrabold">
        <h1 className="text-xl xl:text-[30px]">Carb</h1>
        <LinkIcon className="w-6 h-6 rotate-x-180" />
        <h1 className="text-xl xl:text-[30px] text-cyan-950">Connect</h1>
      </div>
      <nav className="sm:block hidden">
        <ul className="flex xl:text-lg items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 py-2  px-4 ">
          <Link to="/">Home</Link>
          <Link to="/">Calculator</Link>
          <Link to="/">Blog</Link>
          <Link
            // className={({ isActive }) =>
            //   isActive ? 'text-white' : 'text-gray-200 hover:text-gray-100'
            // }
            to="/"
          >
            Shop
          </Link>
          <Link to="/">Forum</Link>
          <Link to="/">About</Link>
        </ul>
      </nav>
      <Bars2Icon
        className="mr-4 sm:mr-0 sm:hidden text-xl"
        onClick={openSideBar}
      />
      {user ? (
        <Link to="/">
          <section className="flex gap-2 px-2 py-1 shadow-lg hover:bg-gray-300 rounded-sm items-center bg-gray-200 text-black">
            <UserIcon />
            {/* TODO */}
            {/* {user.userName} */}
          </section>
        </Link>
      ) : (
        <section className="sm:flex gap-2 hidden">
          <Link
            to="/auth/login"
            className="cursor-pointer text-gray-300 hover:text-gray-100 bg-green-950 hover:bg-green-800 active:bg-green-700 transition delay-75 duration-300 rounded-lg px-4  py-1 "
            >
            Signup
          </Link>
          <Link
            to="/auth/login"
            className="cursor-pointer text-green-800 bg-transparent border-2 border-green-80 transition delay-75 duration-300 rounded-lg px-4  py-1 "
          >
            Signin
          </Link>
        </section>
      )}

      <div
        className={`absolute grid transition-all ${sideBarPosition} duration-300 gap-4 w-screen py-4  sm:hidden z-50 bg-black/60 backdrop-blur-[2px]`}
      >
        {user ? (
          <Link to="/" className="flex justify-end items-center pr-4  pt-4 ">
            <section className="flex gap-2 px-2  py-1  shadow-lg hover:bg-gray-300 rounded-sm items-center bg-gray-200 text-black">
              <UserIcon />
              {/* TODO */}
              {/* {user.userName} */}
            </section>
          </Link>
        ) : (
          <div className="flex gap-2 justify-end items-center pr-4  pt-4 ">
            <Link
              to="/"
              className="cursor-pointer shadow-lg bg-gray-100 hover:bg-gray-200 text-green-950 active:bg-gray-400 transition delay-75 duration-300 rounded-lg px-4  py-1 "
            >
              Signup
            </Link>
            <Link
              to="/"
              className="cursor-pointer shadow-lg text-white bg-transparent border-2 border-gray-100 transition delay-75 duration-300 rounded-lg px-4  py-1 "
            >
              Signin
            </Link>
          </div>
        )}
        <Link to="/">
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>Home</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>Calculator</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>Blog</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>Shop</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>Forum</h3>
          </div>
        </Link>
        <Link
          to="/"
          // className={({ isActive }) =>
          //   isActive
          //     ? 'bg-gray-300 mb-4  text-black'
          //     : 'bg-transparent mb-4  text-white'
          // }
        >
          <div className="flex justify-between text-xl items-center px-4  py-2 ">
            <h3>About</h3>
          </div>
        </Link>
        <div className="flex justify-center items-center text-gray-100 hover:text-gray-200 active:text-gray-300 text-5xl">
          <XMarkIcon onClick={closeSideBar} />
        </div>
      </div>
    </header>
  )
}

export default Header
