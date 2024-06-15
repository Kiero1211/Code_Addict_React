import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, closeSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displayMenu = (e) => {
    const page = e.target.textContent;
    const position = e.target.getBoundingClientRect();
    const center = (position.left + position.right) / 2;
    const top = position.bottom;

    openSubmenu(page, {center, top});
  } 

  const handleMouseOut = (e) => {
    for (let name of e.target.classList) {
      if (name !== "link-btn") {
        closeSubmenu();
        break;
      }
    }
  }

  return (
    <nav className="nav" onMouseOver={handleMouseOut}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe Logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displayMenu} className="link-btn">
              Products
            </button>
          </li>
          <li>
            <button onMouseOver={displayMenu} className="link-btn">
              Developers
            </button>
          </li>
          <li>
            <button onMouseOver={displayMenu} className="link-btn">
              Company
            </button>
          </li>
        </ul>
        <button className="signin-btn btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
