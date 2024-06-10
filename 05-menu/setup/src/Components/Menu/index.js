import React from 'react';
import items from "../../constants/"
const Menu = ({category}) => {
  let requestedItems = (category === "all") ? items : items.filter(item => item.category === category);
  
  return (
    <div className="section-center">
      {requestedItems.map(item => {
        const {id, title, price, img, desc} = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo"/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">$ {price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
