import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
<div className='explore-menu' id='explore-menu'>
     <h1>Exolore our menu</h1>
     <p className='expore-menu-text'>Choose from a diverse menu featuring  a delectable array of dishes. Our mission is to statisfy your cravings and elevate your dining experience , one delicious meal at a time.</p> 
    <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>)
        })}
    </div> 
    <hr /> 
</div>
  )
}

export default Exploremenu