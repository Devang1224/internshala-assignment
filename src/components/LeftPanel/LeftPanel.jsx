import React, { useContext } from 'react'
import './left.css'
import { SelectContext } from "../../context/SelectContext"




const LeftPanel = () => {

  const {setSelectedItem} = useContext(SelectContext);

  return (
    <div className='left-container'>
       <h1>LeftPanel</h1>
      
     <div className="list-container">
       <ul>
        <li onClick={()=>{setSelectedItem("home")}}>Home</li>
        <li onClick={()=>{setSelectedItem("contact")}}>Contact</li>
        <li onClick={()=>{setSelectedItem("guide")}}>Guide</li>
       </ul>
      </div> 
    </div>
  )
}

export default LeftPanel