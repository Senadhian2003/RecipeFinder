import axios from "axios";


export const getCategories = async()=>{
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    return response.data

}

export const getRecipesInCategory = async(category)=>{
    const response =  await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    return response.data
}

export const getRecipeById = async(id) =>{
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    
    return response.data
}

