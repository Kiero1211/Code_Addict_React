import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      setColor("");
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
            type="color"
            onChange={(e) => setColor(e.target.value)} 
          />
          <input 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15205"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </main>
  )
}

export default App
