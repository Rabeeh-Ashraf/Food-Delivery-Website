import React, { useContext } from 'react'
import './cart.css'
import { Storecontext } from '../../context/Storecontext'
const Cart = () => {
  const {cartitems,food_list,removefromcart } = useContext(Storecontext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitems[item._id]>0)
          {
            return(
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartitems[item._id]}</p>              {/*for displayiing the quantity*/}
                <p>{item.price*cartitems[item._id]}</p>       {/*for displaying total */}
                <p>x</p>
              </div>  
                   )
          }
        })}
      </div>
    </div>
  )
}

export default Cart