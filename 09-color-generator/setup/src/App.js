import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  }

  return (
    <main>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ffffff"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>List goes here</h4>
      </section>
    </main>
  )
}

export default App
