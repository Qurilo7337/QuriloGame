import React from 'react'
import Box from '@mui/material/Box';
import { TbGridDots } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import '../NewGames/NewGames.css'
import {DiscountDATA} from './DiscountDATA'
import './Discount.css'

function Discount() {
  return (
    <div>
        <Box py={6} mt={6} px={3} className="d-none d-md-block" sx={{backgroundImage:'url(https://bluechip.io/_next/static/media/discount-games-bg.3a51ba12.svg)'}}>
    <div className="text-white px-4 d-flex ">
        <div className='SSA_24px_font'>Discount</div>
        <div className="d-flex" style={{marginLeft:'auto'}}>
        <div className='SSA_15px_font' > See All   </div> &nbsp;
        <TbGridDots size={18} />
        </div>
    
        </div>
        <div className="d-flex justify-content-center py-4 flex-wrap">
          {DiscountDATA.map((item) => (
           
     <div className='mx-2' style={{width:'156px',height:'210px'}}>
    <div className="SSA_NG_Image_container">
        <div className="d-flex justify-content-between">
        <span className="SSA_live-badge-left  px-2">{item.badge}</span>
         <span className="SSA_live-badge-right px-2 mx-auto">{item.discount}</span>
        </div>
      
      <div className="SSA_NG_overlay">
        <img src={item.img} alt="" width='100%' />
        <div className="SSA_NG_overlay-content">
          <span className="SSA_NG_play-icon "><IoPlayCircle className='p-0 m-0'  fill='#ff0960' size={66} style={{backgroundColor:'#fff',borderRadius:'50%',border:'0px solid transparent'}} /></span>
        </div>
      </div>
      <span className="SSA_SSA_NG_overlay-text">{item.text}</span>
    </div>
  </div>
   ))}
        </div>
  
</Box>
    </div>
  )
}

export default Discount