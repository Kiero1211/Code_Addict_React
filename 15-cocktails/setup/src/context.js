import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { fetchCocktail } from './constants';

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const handleFetch = async () => {
    setLoading(true);
    const list = await fetchCocktail();
    setCocktailList(list);
    setLoading(false);
  }

  useEffect(() => {
    handleFetch();
  }, [])
  return <AppContext.Provider value={{
    loading,
    cocktailList,
    searchTerm,
    setSearchTerm
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
