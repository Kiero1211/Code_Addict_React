import React, { useState, useCallback } from 'react';
import people from '../constants';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = people[index];

  const returnValidIndex = useCallback((number) => {
    if (number > people.length - 1) {
      return 0;
    } 
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }, []);

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="btn-container">
        <button onClick={() => setIndex(prev => returnValidIndex(prev - 1))} className="prev-btn">
          <FaChevronLeft/>
        </button>
        <button onClick={() => setIndex(prev => returnValidIndex(prev + 1))} className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
      <button 
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * people.length);
          setIndex(randomIndex);
        }} 
        className="random-btn"
      >
        Surprise me!
      </button>
    </article>
  );

};

export default Review;
