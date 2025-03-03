import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)
const Storecontextprovider = (props)=>{
    const Contextvalue = {
        food_list
    }
    return(
        <Storecontext.Provider value={Contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}



export default Storecontextprovider