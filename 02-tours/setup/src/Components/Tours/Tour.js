import React, { useState, useContext } from 'react';
import { TourContext } from '../../App';

const Tour = ({id, image, info, price, name}) => {
  const [showMore, setShowMore] = useState(false);
  const deleteTour = useContext(TourContext).deleteTour;
  
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {showMore ? `${info}` : `${info.substring(0, 200)}...`}
          <button 
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
