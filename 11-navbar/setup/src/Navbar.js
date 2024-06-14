import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const containerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const listHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      containerRef.current.style.height = listHeight + "px";
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            {
              links.map(link => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="social-icons">
          <ul className="social-icons">
            {
              social.map(app => {
                return (
                  <li key={app.id}>
                    <a href={app.url}>{app.icon}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
