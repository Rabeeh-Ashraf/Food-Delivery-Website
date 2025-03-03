import React, { useContext } from 'react'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem'
import ('./fooddisplay.css')
const Fooddisplay = ({category}) => {
    const {food_list}=useContext(Storecontext)
  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                return <Fooditem key={index}id={item._id}name={item.name}description={item.description}price={item.price}image={item.image}/>
            })}
        </div>
        </div>
  )
}

export default Fooddisplay