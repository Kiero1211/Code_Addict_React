import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import constants from './constants'
import actions from './actions'
import {fetchData} from "./data";

const AppContext = React.createContext()



const initalState = {
  loading: false,
  cart: await fetchData(),
  quantity: 0,
  totalPrice: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const {getTotals}  = actions;
  
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
