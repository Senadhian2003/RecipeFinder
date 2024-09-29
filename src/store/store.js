import { createStore } from "redux";
// import { getCategories } from "../api/axios";

// const categories = await getCategories()

// console.log(categories);

const initialState = {

    categories: [],
    currentCategory: '',
    recipeList: [],
    recipeDetailName: '',
    recipeMealId: 0,
    recipeDetail: {},
    isRecipeDetailLoading : false,
    isRecipeDetailError : false,


}

const reducerFunction = (state, action) => {


    switch (action.type) {

        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload.categories,
                currentCategory: action.payload.categories[0].strCategory,
            }

        case 'CHANGE_CATEGORY':
            return {
                ...state,
                currentCategory: action.payload.currentCategory,
                recipeList: [],
                recipeDetail: ''
            }

        case 'UPDATE_RECIPE_LIST':
            return {
                ...state,
                recipeList: action.payload.recipeList
            }

        case 'UPDATE_RECIPE_DETAIL_ID':
            return {
                ...state,
                recipeMealId: action.payload.recipeDetailMealId
            }

        case 'UPDATE_RECIPE_DETAIL':
            return {
                ...state,
                recipeDetail: action.payload.recipeDetail
            }
        
        case 'UPDATE_RECIPE_DETAIL_LOADING':
            return{
                ...state,
                isRecipeDetailLoading : action.payload.isRecipeDetailLoading
            }
        case 'UPDATE_RECIPE_DETAIL_ERROR':
            return{
                ...state,
                isRecipeDetailError : action.payload.isRecipeDetailError
            }
        
        default:
            return state

    }



}

export const store = createStore(reducerFunction, initialState)


