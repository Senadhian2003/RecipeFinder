import React, { useEffect } from 'react'
import styles from './Sidebar.module.css';
import SidebarElement from './SidebarElement';

import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../api/axios';

function Sidebar() {
  const state = useSelector(state=> state)
  const dispatch = useDispatch()

  useEffect(()=>{

    getCategories().then((data)=>{
      console.log("CAtegories Data :", data)

      dispatch({type : "GET_CATEGORIES", payload : {categories : data.categories}})
      console.log(state)
    }).catch((error)=>{
      console.log("Error : " + error);
      
    })

  },[])

 
  // console.log(state);
  
  return (
    <div className={styles.sidebar}>
      

      <p className={styles.header}>Categories</p>

      {
      state.categories.map((item)=>{
        return  <SidebarElement item={item}></SidebarElement>
      })
      }

{/* <SidebarElement categoryName = {"Seafood"}></SidebarElement> */}
     

    </div>
  )
}

export default Sidebar