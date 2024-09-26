import React from 'react'
import Card from 'react-bootstrap/Card';
import { getRecipeById } from '../../api/axios';
import { useDispatch } from 'react-redux';
import styles from './RecipeList.module.css'
function RecipeCard({item}) {
  const dispatch = useDispatch()
  let changeCurrentDisplayItem = async(mealId)=>{
   
   console.log(mealId)
    
    dispatch({type : 'UPDATE_RECIPE_DETAIL_ID', payload : {recipeDetailMealId : mealId}})

  }


  // console.log(item)
  return (
    <div className={`col-3`} onClick={()=>changeCurrentDisplayItem(item.idMeal)}>
      <div >
      <Card className={styles.recipeCard} style={{ width: '18rem' }}>
      <Card.Img src={item.strMealThumb} variant="top"  />
      <Card.Body>
        <Card.Title >{item.strMeal}</Card.Title>
        
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default RecipeCard