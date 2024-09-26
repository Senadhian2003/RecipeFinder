import React from 'react'
import styles from './Sidebar.module.css'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { getRecipesInCategory} from '../../api/axios'
export default function SidebarElement({item}) {

  const state = useSelector(state=>state)

  const dispatch = useDispatch()
  const changeCurrentCategory = async(categoryName)=>{
    dispatch({type : 'CHANGE_CATEGORY', payload : { currentCategory : categoryName}})

  }

  return (
    <div className={item.strCategory == state.currentCategory? styles.currentContent : styles.content} onClick={()=>changeCurrentCategory(item.strCategory)} >
        
     {item.strCategory}


    </div>
  )
}
