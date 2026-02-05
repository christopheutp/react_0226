import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const MonContext = createContext();

export default function MonProvider({children}) {
  const [monState,setMonState] = useState(false);

  return (
    <MonContext.Provider value={{monState,setMonState}} >
        {children}
    </MonContext.Provider>
  )
}
