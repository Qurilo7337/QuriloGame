
import * as React from 'react';
import Box from '@mui/material/Box';
import { TbGridDots } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import {SportsBeltDATA} from './SportsBeltDATA'
import './SportsBelt.css'

function SportsBelt() {

  return (
    <Box pb={6} pt={12} px={3} className="d-none d-md-block">
        <div className="text-white px-4 d-flex px-4 ">
            <div className='SSA_24px_font'>Sports Bets</div>
            <div className="d-flex" style={{marginLeft:'auto'}}>
            <div className='SSA_15px_font' > See All   </div> &nbsp;
            <TbGridDots size={18} />
            </div>
        
            </div>
            <div className="d-flex justify-content-center py-4 flex-wrap">
              {SportsBeltDATA.map((item) => (
               
         <div className='mx-2' style={{width:'156px',height:'210px'}}>
        <div className="image-container">
          <span className="SSA_live-badge px-2">{item.badge}</span>
          <div className="overlay">
            <img src={item.img} alt="" width='100%' />
            <div className="overlay-content">
              <span className="play-icon "><IoPlayCircle className='p-0 m-0'  fill='#ff0960' size={66} style={{backgroundColor:'#fff',borderRadius:'50%',border:'0px solid transparent'}} /></span>
            </div>
          </div>
          <span className="SSA_overlay-text">{item.text}</span>
        </div>
      </div>
       ))}
            </div>
      
    </Box>
  )
}

export default SportsBelt 