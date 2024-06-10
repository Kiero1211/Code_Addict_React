import React, { useState, useEffect } from 'react'
import Loading from "./Loading";
import Tabs from "./Tabs"

const url = 'https://www.course-api.com/react-tabs-project';


function App() {
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (index) => {
    setIndex(index);
  }

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const tabs = await response.json();
        setJobs(tabs);
    } catch (error) {
        throw new Error(error)
    } finally {
      setLoading(false);
    }
}

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <section className="section">
        {loading ? <Loading/> : <Tabs index={index} jobs={jobs} props={jobs[index]} onClick={handleClick}/>}
      </section>
    </main>
  )

}

export default App
