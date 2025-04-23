import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const Storecontext = createContext(null)
const Storecontextprovider = (props)=>{

    const [cartitems,setcartitems]=useState({})
    console.log("Data in the cart:",cartitems);
    
    const url = "http://localhost:4000" 
    const [token,setToken] = useState("")
    const [food_list,setFoodList]=useState([])


    const addtocart = async (itemId)=>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{ 
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }


    const removefromcart  = async(itemId )=>{
        setcartitems(((prev)=>({...prev,[itemId]:prev[itemId]-1})))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price*cartitems[item]; 
            }
            
        }
        return totalAmount;
    }
    
        const fetchFoodList =async()=>{
            const response = await axios.get(url+"/api/food/list");
            setFoodList(response.data.data)
        }

        const loadCartData = async (token) => {
            try {
              const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
              setcartitems(response.data.cartData);
            } catch (error) {
              console.error("Failed to load cart:", error);
              setcartitems({});
            }
          };
          

    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    // useEffect(() => {
    //     const loadData = async () => {
    //       await fetchFoodList();
      
    //       const storedToken = localStorage.getItem("token");
    //       if (storedToken) {
    //         setToken(storedToken); // still useful to store globally
    //         await loadCartData(storedToken); // use the token directly here
    //       }
    //     };
      
    //     loadData();
    //   }, []);
      

    const Contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return(
        <Storecontext.Provider value={Contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}



export default Storecontextprovider