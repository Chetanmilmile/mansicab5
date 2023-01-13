import React from 'react'
import './UpperNavbar.css'
import { FaWhatsapp } from 'react-icons/fa'
import Marquee from "react-fast-marquee";
import { FcCellPhone } from 'react-icons/fc';

function UpperNavbar() {


  return (
    <div className='upperNavContainer'>
      <div className='upperNavLeft'>
      <Marquee className='tagline' speed={100} gradient={false}>
          Our Goal Is To Win Your Trust
      </Marquee>
      </div>
        <div className='upperNavRight'>
            <div><a href='https://wa.me/918484846395'><FaWhatsapp className='uppernavwhats'/></a> <FcCellPhone  className='uppernavCall'/><a href='tel:+91 8484846395'>84 84 84 6395 </a></div>
            <div><a href='https://wa.me/918585857798'><FaWhatsapp className='uppernavwhats'/></a> <FcCellPhone  className='uppernavCall'/><a href='tel:+91 8585857798'>85 85 85 7798</a></div>
        </div>
    </div>
  )
}

export default UpperNavbar