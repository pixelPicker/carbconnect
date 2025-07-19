import { Route as AboutRoute } from '@/routes/about'
import { Route as HomeRoute } from '@/routes/__root'
import { Route as CalculatorRoute } from '@/routes/calculator'
import {
  Bars2Icon,
  LinkIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import Logo from './Logo'

function Header() {
  const [sideBarPosition, setSideBarPosition] = useState('bottom-full')

  const [user, setUser] = useState(false)

  const openSideBar = () => {
    setSideBarPosition('top-0')
  }
  const closeSideBar = () => {
    setSideBarPosition('bottom-full')
  }

  const navbarProps = [
    { id: 'home', name: 'Home', location: HomeRoute.to },
    { id: 'calculator', name: 'Calculator', location: CalculatorRoute.to },
    { id: 'about', name: 'About', location: AboutRoute.to },
  ]

  return (
    <header className="flex z-40 items-center bg-green-200/20 shadow-lg backdrop-blur-[2px] fixed top-0 font-Outfit left-1/2 -translate-x-1/2  justify-between w-screen sm:px-4  py-2 ">
      <Logo />
      <nav className="sm:block hidden">
        <ul className="flex xl:text-lg items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 py-2  px-4 ">
          {navbarProps.map((navlink) => (
            <Link
              className="text-gray-900 hover:text-gray-800"
              activeOptions={{ exact: true }}
              activeProps={{ className: 'text-gray-750 text-lg border-[2px] px-2 py-1 rounded-sm' }}
              to={navlink.location}
              key={navlink.id}
            >
              {navlink.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Bars2Icon
        className="mr-4 sm:mr-0 sm:hidden size-5"
        onClick={openSideBar}
      />
      {user ? (
        <Link to="/">
          <section className="flex gap-2 px-2 py-1 shadow-lg hover:bg-gray-300 rounded-sm items-center bg-gray-200 text-black">
            <UserIcon className="size-5" />
            {/* TODO */}
            {/* {user.userName} */}
          </section>
        </Link>
      ) : (
        <section className="sm:flex gap-2 hidden">
          <Link
            to="/auth/signup"
            className="cursor-pointer text-gray-300 hover:text-gray-100 bg-green-950 hover:bg-green-800 active:bg-green-700 transition delay-75 duration-300 rounded-lg px-4  py-1 "
          >
            Signup
          </Link>
          <Link
            to="/auth/signin"
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
          <Link to="/" className="flex justify-end items-center pr-4 pt-4 ">
            <section className="flex gap-2 px-2  py-1  shadow-lg hover:bg-gray-300 rounded-sm items-center bg-gray-200 text-black">
              <UserIcon />
              {/* TODO */}
              {/* {user.userName} */}
            </section>
          </Link>
        ) : (
          <div className="flex gap-2 justify-end items-center pr-4 pt-4">
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
        {navbarProps.map((navlink) => (
          <Link
            to={navlink.location}
            activeOptions={{ exact: true }}
            activeProps={{ className: 'bg-gray-300 text-black' }}
            key={navlink.id}
          >
            <div className="flex justify-between items-center px-4 py-2">
              <h3>{navlink.name}</h3>
            </div>
          </Link>
        ))}
        <div className="flex justify-center items-center text-gray-100 hover:text-gray-200 active:text-gray-300 text-5xl">
          <XMarkIcon onClick={closeSideBar} className="size-5" />
        </div>
      </div>
    </header>
  )
}

export default Header
