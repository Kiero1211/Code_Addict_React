import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './constants';
function App() {
  const [people, setPeople] = useState(data);
  const [showIndex, setShowIndex] = useState(0);
  const prevSlideRef = useRef();
  const timerRef = useRef();

  const returnValidIndex = useCallback((index) => {
    if (index > data.length - 1) {
      return 0;
    } 
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  }, [])

  const handleNext = () => setShowIndex(prev => returnValidIndex(prev + 1));

  const handlePrevious = () => setShowIndex(prev => returnValidIndex(prev - 1));

  useEffect(() => {
    prevSlideRef.current = showIndex;
  }, [showIndex])

  useEffect(() => {
    const timerID = setInterval(() => handleNext(), 3000)
    timerRef.current = timerID;

    return () => {
      clearInterval(timerRef.current);
    }
  }, [showIndex])
  return (
    <section className="section"> 
    <div className="title">
      <h2>
        <span>/</span>
        review
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, index) => {
        const {id, image, name, title, quote} = person;
        let className;
        if (index === showIndex) {
          className = "activeSlide"
        } else if (index === prevSlideRef.current) {
          className = "lastSlide";
        } else {
          className = "nextSlide";
        }

        return (
          <article key={id} className={className}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="quote">{quote}</p>
            <FaQuoteRight className="icon"/>
          </article>
        )
      })}
      <button 
        className="prev"
        onClick={handlePrevious}
      >
        <FiChevronLeft/>
      </button>
      <button 
        className="next"
        onClick={handleNext}
      >
        <FiChevronRight/>
      </button>
    </div>
    </section>
  );
}

export default App;
