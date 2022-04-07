import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsappIcon from "@material-ui/icons/WhatsApp";

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
  <InstagramIcon/><TwitterIcon/><FacebookIcon/><WhatsappIcon/>
    </div>
    <p>&copy: 2022 pizzahut.com</p>
    </div>
  )
}

export default Footer
