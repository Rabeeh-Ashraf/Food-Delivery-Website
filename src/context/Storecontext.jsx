import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)
const Storecontextprovider = (props)=>{

    const [cartitems,setcartitems]=useState({})
    const addtocart =(itemId)=>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
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