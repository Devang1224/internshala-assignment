import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const SelectContext = createContext();



const SelectContextProvider = ({children}) => {

  const[selectItem,setSelectedItem] = useState("home")


  return (
   <SelectContext.Provider value={{selectItem,setSelectedItem}}>
      {children}
   </SelectContext.Provider>
  )
}

export default SelectContextProvider