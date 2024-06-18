import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="Cocktail DB lofo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div >
  )
}

export default Navbar
