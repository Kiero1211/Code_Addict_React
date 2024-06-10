import React, { useEffect, useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const newText = data.slice(0, value);
    setText(newText);
  }, [value])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])
    
  const handleClick = () => {
    const numberInput = document.getElementById("amount");
    setValue(returnValidValue(numberInput.value));
  }

  const returnValidValue = (value) => {
    if (value > 8) {
      return 8;
    }
    if (value < 0) {
      return 0;
    }

    return value;
  }

  const handleScroll = () => {
    setShowToTop(window.scrollY >= 300);
  }

  const goToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount" className="amount"></label>
        <input type="number" name="amount" id="amount" min="1" max="8" step="1" />
        <button onClick={handleClick} type="button" className="btn">Generate</button>
      </form>
      <article className="lorem-text result">
        {text.map((para, index) => <p key={index}>{para}</p>)}
      </article>
      { showToTop &&  
        <button
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            padding: 10,
            cursor: "pointer"
          }} 
          onClick={goToTop}
        >
          To Top
        </button>
      }
     
    </section>
  )
}

export default App;
