import React, { useContext, useEffect } from 'react'
import "./verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'

const Verify = () => {
        const [searchParams,setSearchParams]= useSearchParams()

        const success = searchParams.get("success")
        const orderId = searchParams.get("orderId")
        const {url} = useContext(Storecontext)
        const navigate = useNavigate()

        const verifyPayment   = async() =>{
            const response = await axios.post(url+"/api/order/verify",{success,orderId})
            if(response.data.success){
                navigate( "/myOrders")
            }else{
                navigate("/")
            }
        }
        useEffect(()=>{
            verifyPayment();
        },[])

  return (
    <div className='Verify'>
        <div className='spinner'>

        </div>
    </div>
  )
}

export default Verify