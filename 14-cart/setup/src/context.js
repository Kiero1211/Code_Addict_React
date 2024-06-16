import React, { useState, useContext, useReducer, useEffect } from 'react'
import {reducer, initalState} from './reducer'


const AppContext = React.createContext()



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <AppContext.Provider
      value={{
        ...state,
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
