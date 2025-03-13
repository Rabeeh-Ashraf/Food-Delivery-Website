import React from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import ('./fooditem.css')
const Fooditem = ({id,name,price,description,image}) => {

    const {cartitems,addtocart,removefromcart}=useContext(Storecontext)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'> 
        <img className='food-item-image' src={image} alt="" />
        {!cartitems[id]
            ?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
            </div>
            
        }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
        </div>
  )
}

export default Fooditem