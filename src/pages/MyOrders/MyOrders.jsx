
import React, { useState ,useContext,useEffect} from 'react'
import axios from "axios" 
import "./MyOrders.css"
import { Storecontext } from '../../context/Storecontext'
import { assets } from '../../assets/assets'

const MyOrders = () => {
    const [data,setData] = useState([])
    const {url,token} = useContext(Storecontext)

        const fetchOrders = async ()=>{
            const response =await axios.post(url+"/api/order/userorders",{},{headers:{token}})   
            setData(response.data.data)
        }

        useEffect (()=>{
            if(token){
                fetchOrders();
            }
        },[token])
    
  return (
    <div className='MyOrders'>
     <h2>MyOrders</h2>
     <div className='container'>
        {data.map((order,index)=>{
            return (
                <div key={index} className='My-Orders-order'>
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if (index=== order.items.length-1) {
                            return item.name+"x"+item.quantity
                        }else{
                            return item.name+"x"+item.quantity+", "
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>items : {order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button>Track Order</button>
                </div>
            )
        })}
     </div>
    </div>
  )
}

export default MyOrders