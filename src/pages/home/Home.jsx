import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
const Home = () => {
  const [category,setcategory]= useState("All")

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home