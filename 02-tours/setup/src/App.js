import React, { useState, useEffect, createContext } from 'react';
import Loading from './Components/Loading/';
import Tours from './Components/Tours/';
import Tour from './Components/Tours/Tour';

const url = "https://www.course-api.com/react-tours-project"
const TourContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    } 
  }

  useEffect(() => {
    fetchTours();
  }, [])
    
  const toursKit = {
    tours,
    deleteTour
  }

  const Component = loading ? <Loading/>
                            : (
                              <TourContext.Provider value={toursKit}>
                                <Tours/>
                              </TourContext.Provider>
                              )
  return (
    <main>
      {Component}
    </main>
  )
}
export {TourContext};
export default App;

