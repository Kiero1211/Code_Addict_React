import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import fetchData from "./constants";
function App() {
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    const requestedTabs = fetchData();
    setTabs(requestedTabs);
  }, [])
  console.log(tabs);
  return <h2>tabs project setup</h2>
}

export default App
