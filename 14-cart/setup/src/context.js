import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import constants from './constants'
import actions from './actions'
import {fetchData} from "./data";

const AppContext = React.createContext()



const initalState = {
  loading: true,
  cart: [],
  quantity: 0,
  totalPrice: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const {getTotals, loading, displayItems}  = actions;
  
  const handleFetchData = async () => {
    dispatch(loading());
    const data = await fetchData();
    dispatch(displayItems(data));
  }

  useEffect(() => {
    handleFetchData();
  }, [])

  useEffect(() => {
    dispatch(getTotals());
  }, [state.cart])
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        constants,
        actions
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
