import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import ('./fooditem.css')
const Fooditem = ({id,name,price,description,image}) => {
    const [itemcount,setitemcount]=useState(0)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'> 
        <img className='food-item-image' src={image} alt="" />
        {!itemcount
            ?<img className='add' onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
                    <img onClick={()=>setitemcount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                    <p>{itemcount}</p>
                    <img onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
            </div>
            
        }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>₹{price}</p>
        </div>
        </div>
  )
}

export default Fooditem