import React from 'react'
import Image from 'next/image'
import './page.css'
import Link from 'next/link'
import { color, delay } from 'framer-motion'
import Navbar from '@/app/components/Navbar'








async function page ({params})  {
   const name1 = params.slug
    async function getData() {
        const res = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${name1}`)
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
       
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
        
      }



    const data = await getData()
    const meal = data.meals[0]
  
    const ingredientsArray = [meal.strIngredient1 ,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
      meal.strIngredient10,
      meal.strIngredient11,
      meal.strIngredient12,
      meal.strIngredient13,
      meal.strIngredient14,
      meal.strIngredient15,
      meal.strIngredient16,
      meal.strIngredient17,
      meal.strIngredient18,
      meal.strIngredient19,
      meal.strIngredient20
    ]
    const measures = [
      meal.strMeasure1,
      meal.strMeasure2,
      meal.strMeasure3,
      meal.strMeasure4,
      meal.strMeasure5,
      meal.strMeasure6,
      meal.strMeasure7,
      meal.strMeasure8,
      meal.strMeasure9,
      meal.strMeasure10,
      meal.strMeasure11,
      meal.strMeasure12,
      meal.strMeasure13,
      meal.strMeasure14,
      meal.strMeasure15,
      meal.strMeasure16,
      meal.strMeasure17,
      meal.strMeasure18,
      meal.strMeasure19,
      meal.strMeasure20
    ]

    const splitLink = meal.strYoutube.split('watch?v=')
    const embedLink = splitLink.join('embed/')


  console.log(meal.strYoutube)
  console.log(embedLink)

  let text = meal.strInstructions;



   
return (

    <div className='mainContent'>
      <Navbar/>
      
       

        <div className='hero11'>

       <div className='recipeSection1'>  



          <div className='ingredients1'>
       
              <h2>Ingredients:</h2>
            <div  className='ingredientsContainer'>
               <div className='items'>
                   {ingredientsArray.map((item)=> item=== ""? null : <div className='item' key={item}>{item }:    </div> )}
               </div>

      
               <div className='measures' >
                  { measures.map((item)=><div className='measure' key={item}> {item} </div> )} 

               </div>


      
      
    
            </div>


            <div className='extraInfo'>
               <div className='category'  > <span>Category:</span> {meal.strCategory}</div>
               <div className='area'><span>Area:</span> {meal.strArea} </div>
            </div>


          </div>
          <div className='nameAndPhoto' >
          <h1 className='recipeName'>{meal.strMeal}</h1>      
          <div className='loo'>
         
          
<Image    layout='fill' priority className="productImg1" src={meal.strMealThumb} alt="meal" />


</div>
</div>
        
       </div> 
       </div>

       <div className='instructions'>
              <h2>
              Instructions:
              </h2 >
                <div  >

                {text}
                </div>
              

            </div>
          <h1 className='ytTutorial'>Youtube tutorial:</h1>
         <iframe className='ytVideo' src={embedLink}/>






  
     


    </div>
)

}

export default page