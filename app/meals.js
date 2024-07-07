import React, { useEffect } from 'react'

async function  getData () {
  const res = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
  const data = await res.json()  
return data

    
  

}



export default async function Meals(){
  const meals = await getData()
  

 

  return(
    <div> 
      
    ssssssssss
    </div>
  )
}



'use client'
import React, {useState} from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import Meals from './meals'


const page = () => {
   function buttonClicked() {
   
  
    setShow(true)
      
   }
   const [show, setShow] = useState(false)

  return (
    <main>
<div className="input_div">
        <input type="search" placeholder="search for a meal..." id="input"  ></input>
        <Button className="search_btn" onClick= {buttonClicked}>Search</Button>
     </div>

     <div className="items">
         { show? <div>
          <Meals/>
         </div> : <div>
        
          </div>}
     </div>
     </main>
  )
}

export default page