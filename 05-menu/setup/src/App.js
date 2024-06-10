import React, { useState, useEffect } from 'react';

import Menu from './Components/Menu';
import Categories from './Components/Category';
import items from './constants';


function App() {
  const [category, setCategory] = useState("all");
  const [menuItems, setMenuItems] = useState(items);

  const handleClick = (category) => {
    setCategory(category);
  }
    
  //Render items accordingly
  useEffect(() => {
    const requestedItems = (category === "all") ? items : items.filter(item => item.category === category);
    setMenuItems(requestedItems);
  }, [category])
  
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories handleClick={handleClick}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
