import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cocktailList, setCocktailList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();


      const list = data.drinks;
      if (list) {
        const newCockTails = list.map(item => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          }
        })
        setCocktailList(newCockTails)
      } else {
        setCocktailList([]);
      }
      setLoading(false);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [searchTerm]);

  useEffect(() => {
    handleFetch();
  }, [searchTerm, handleFetch])
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
