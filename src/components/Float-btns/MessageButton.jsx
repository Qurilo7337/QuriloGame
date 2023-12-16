import React from 'react'
import './MessageButton.css'
import { FaRegMessage } from "react-icons/fa6";


function MessageButton() {
  return (
    <div className='text-white SSA_fixed-button p-3' >
        <div style={{borderRadius:'50%'}}>
        <FaRegMessage size={30}  />
        </div>
      
    </div>
  )
}

export default MessageButton