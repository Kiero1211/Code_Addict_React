import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading/';
import Tours from './Components/Tours/';

const url = "https://www.course-api.com/react-tours-project"

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  }

  useEffect(() => {
    try {
      fetchTours();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, [])
  return (
    <main>
      {loading ? <Loading/> : <Tours/>}
    </main>
  )
}

export default App
