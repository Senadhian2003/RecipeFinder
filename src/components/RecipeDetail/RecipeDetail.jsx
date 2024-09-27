import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';
import styles from './RecipeDetail.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { getRecipeById } from '../../api/axios'

export default function RecipeDetail() {
  // const [recipeDetail, setRecipeDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const state = useSelector(state => state)
  const {recipeDetail} = state;
  const dispatch = useDispatch()
  console.log(state)
  const { recipeMealId } = state
 
  const calculateIngretientsArray = ()=>{
    if (recipeDetail) {
      const ingredients = [];
      let i = 1
      while (true) {
        let ingredient = recipeDetail[`strIngredient${i}`];
        const measure = recipeDetail[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
          ingredients.push({ ingredient, measure });
        }
        else {
         
          return ingredients
        }
        i += 1
      }
    }
  
  }

  const cachedIngredients = useMemo(calculateIngretientsArray, [recipeDetail])

  // const ingredients = [];
  // if (recipeDetail) {
  //   let i = 1
  //   while (true) {
  //     const ingredient = recipeDetail[`strIngredient${i}`];
  //     const measure = recipeDetail[`strMeasure${i}`];
  //     if (ingredient && ingredient.trim() !== "") {
  //       ingredients.push({ ingredient, measure });
  //     }
  //     else {
  //       break;
  //     }
  //     i += 1
  //   }
  // }


  useEffect(() => {

    // dispatch({type : 'UPDATE_RECIPE_DETAIL_ERROR', payload : {isRecipeDetailError : false}})

    setIsError(false)

    // dispatch({type : 'UPDATE_RECIPE_DETAIL_LOADING', payload : {isRecipeDetailLoading : true}})

    setIsLoading(true)
    getRecipeById(recipeMealId).then((data) => {

      

      // setRecipeDetail(data.meals[0])

      

      dispatch({type : 'UPDATE_RECIPE_DETAIL', payload : {recipeDetail : data.meals[0]}})

      // dispatch({type : 'UPDATE_RECIPE_DETAIL_LOADING', payload : {isRecipeDetailLoading : false}})

      setIsLoading(false)
      
      console.log(data)
    }).catch((error) => {
      console.log(error)

      // dispatch({type : 'UPDATE_RECIPE_DETAIL_LOADING', payload : {isRecipeDetailLoading : false}})

      setIsLoading(false)

      // dispatch({type : 'UPDATE_RECIPE_DETAIL_ERROR', payload : {isRecipeDetailError : true}})

      setIsError(true)
    })



  }, [recipeMealId])
  if(isLoading){
    return <div style={{textAlign : 'center'}}>
      <img  src="https://i.pinimg.com/originals/dc/66/53/dc6653448a617b0564541708101d3eac.gif" alt="" />
    </div>
  }
  else if(recipeDetail.strMealThumb)
  return (
    <div className={styles.border} >
      <div className="container">
        <p className={styles.mealName} > {recipeDetail.strMeal}</p>
        <div className="row">

          <div className="col-3">
            <div style={{ textAlign: 'center' }}>
              {recipeDetail && <img className={styles.recipeDetailImage} src={recipeDetail.strMealThumb} alt="" />}
            </div>
          </div>

          <div className="col-9">

            <div className={styles.recipeDetailDescription}>
              <div >
                {recipeDetail.strInstructions}
              </div>

              <br />

              {recipeDetail && <div> <p className={styles.heading} > Ingredients </p>



                <p>

                  {cachedIngredients.map((item) => {
                    return `${item.ingredient} ${item.measure==' '? `` : `(${item.measure})`}\t`
                  })}

                </p>

              </div>}

              {recipeDetail.strYoutube && <p><span className={styles.heading}>Youtube : </span> <a href={recipeDetail.strYoutube}>{recipeDetail.strYoutube}</a></p>
              }
            </div>

          </div>

        </div>


      </div>




    </div>
  )
}
