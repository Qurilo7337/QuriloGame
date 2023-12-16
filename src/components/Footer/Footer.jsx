import React from 'react';
import './Footer.css';
import CopyRightContent from './CopyRightContent';
import FooterContent from './FooterContent';
import PaymentSection from './PaymentSection';
function Footer() {
  return (
    <div className='text-white pt-5'>
     <FooterContent/>
     <PaymentSection/>
      <CopyRightContent/>
    </div>
  );
}

export default Footer;
