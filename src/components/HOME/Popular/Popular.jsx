import React from 'react'
import Box from '@mui/material/Box';
import { TbGridDots } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import '../SportsBelt/SportsBelt.css'
import {PopularDATA} from './PopularDATA'

function Popular() {
  return (
    <div>
     <div>
     <Box py={6} px={3} className="d-none d-md-block">
        <div className="text-white px-4 d-flex ">
            <div className='SSA_24px_font'>Popular In India</div>
            <div className="d-flex" style={{marginLeft:'auto'}}>
            <div className='SSA_15px_font' > See All   </div> &nbsp;
            <TbGridDots size={18} />
            </div>
        
            </div>
            <div className="d-flex justify-content-center py-4 flex-wrap">
              {PopularDATA.map((item) => (
               
         <div className='mx-2' style={{width:'156px',height:'210px'}}>
        <div className="SSA_TG_Image_container">
          <span className="SSA_live-badge px-2">{item.badge}</span>
          <div className="SSA_TG_overlay">
            <img src={item.img} alt="" width='100%' />
            <div className="SSA_TG_overlay-content">
              <span className="SSA_TG_play-icon "><IoPlayCircle className='p-0 m-0'  fill='#ff0960' size={66} style={{backgroundColor:'#fff',borderRadius:'50%',border:'0px solid transparent'}} /></span>
            </div>
          </div>
          <span className="SSA_SSA_TG_overlay-text">{item.text}</span>
        </div>
      </div>
       ))}
            </div>
      
    </Box>
    </div>   
    </div>
  )
}

export default Popular