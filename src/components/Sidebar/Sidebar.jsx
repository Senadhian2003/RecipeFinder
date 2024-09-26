import React from 'react'
import styles from './Sidebar.module.css';
import SidebarElement from './SidebarElement';

import { useSelector } from 'react-redux';

function Sidebar() {
  const state = useSelector(state=> state)
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