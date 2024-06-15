import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {
  const {isSubmenuOpen, closeSubmenu, location, page: {page, links}} = useGlobalContext();
  const [columns, setColumns] = useState();
  const containerRef = useRef();

  useEffect(() => {
    const submenu = containerRef.current;
    const {center, top} = location;
    submenu.style.left = center + "px";
    submenu.style.top = top + "px";

    if (links.length <= 2) {
      setColumns(2);
    } else if (links.length === 3) {
      setColumns(3);
    } else {
      setColumns(4);
    }
  }, [location, links])


  return (
    <aside onMouseLeave={closeSubmenu} className={`${
      isSubmenuOpen ? "submenu show" : "submenu"
    }`} ref={containerRef}>
        <h4>{page}</h4>
        <div className={`submenu-center col-${columns}`}>
          {links.map((link, index) => {
            const {label, icon, url} = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
    </aside>
  )
}

export default Submenu
