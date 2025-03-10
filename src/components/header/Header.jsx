import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring  a delectable array of dishes crafted with the finest ingredients and culinary expertice. Our mission is to statisfy your cravings and elevate your dining experience , one delicious meal at a time. </p>
        <button onClick={()=>{window.scrollTo({top : 950})}}>view menu</button>
        </div>
    </div>
  )
}

export default Header