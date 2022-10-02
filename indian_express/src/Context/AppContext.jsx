
import React, { createContext, useState } from "react";

export const AppContext=createContext();

const AppContextProvider=({children})=>{
   const [isAuth,setIsAuth]=useState(false)

   const handleisAuth=()=>{
    setIsAuth(!isAuth)
   }

    return <AppContext.Provider value={{isAuth,handleisAuth}}>{children}</AppContext.Provider>
}

export default AppContextProvider;