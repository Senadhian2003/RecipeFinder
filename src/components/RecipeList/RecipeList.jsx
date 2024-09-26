import React, { useEffect, useState } from 'react'

import styles from './RecipeList.module.css'
import RecipeCard from './RecipeCard'

import { useSelector } from 'react-redux'
import { getRecipesInCategory } from '../../api/axios'

import { useDispatch } from 'react-redux'

function RecipeList() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  // console.log(state.currentCategory,isLoading)

  const getRecipeList = async (category) => {
    const ItemsInCategory = await getRecipesInCategory(category)
    const meals = ItemsInCategory.meals

    dispatch({ type: 'UPDATE_RECIPE_LIST', payload: { recipeList: meals } })

  }

  useEffect(() => {
    setIsLoading(true)
    if (state.currentCategory) {

      getRecipeList(state.currentCategory).then(() => {
        setIsLoading(false)
      }).catch((error) => {
        setIsLoading(false)
        setIsError(true)
      })

    }


  }, [state.currentCategory])

  if (isLoading) {
    return <div style={{ textAlign: 'center' }}>
      <img src="https://i.pinimg.com/originals/dc/66/53/dc6653448a617b0564541708101d3eac.gif" alt="" />
    </div>
  }
  if (isError) {
    return <h1>ERROR</h1>
  }
  else
    return (

      <div className={styles.border}>
        <p className={styles.listHeading}>Recipes</p>

        <div className="container">

          <div className="row">
            {state.recipeList.map((item) => {
              return <RecipeCard item={item}  ></RecipeCard>
            })}
          </div>

        </div>





      </div>
    )
}

export default RecipeList