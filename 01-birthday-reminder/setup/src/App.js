import React, { useState, useContext } from 'react';

import List from './components/ListComponent';
import { peopleContext } from './contexts/PeopleContext';
function App() {
  const [people, setPeople] = useState(useContext(peopleContext));

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <List people = {people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  )
}

export default App;
