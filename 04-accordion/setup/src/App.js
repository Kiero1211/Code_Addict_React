import React, { useState } from 'react';
import data from './constants';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((question, index) => {
          return <SingleQuestion key={index} {...question}/>
        })}
      </section>
    </main>
  );
}

export default App;
