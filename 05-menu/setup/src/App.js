import React, { useState } from 'react';

import Menu from './Components/Menu';
import Categories from './Components/Category';
import items from './constants';
import categories from "./constants/categories";


function App() {
  const [category, setCategory] = useState("all");

  const handleClick = (category) => {
    setCategory(category);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories handleClick={handleClick}/>
        <Menu category={category}/>
      </section>
    </main>
  );
}

export default App;
