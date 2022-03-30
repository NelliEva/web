import React from "react";
import {SocialIcon} from 'react-social-icons';
import {Link} from 'react-router-dom';

function Contact(){
    return(
        <div className="contact_container">
          <div className="contactHeader">
            <h2>Get in Touch</h2>
          </div>
          <div className="contactCartBox">
            <div className="contact_cart cart2">
              <i class="fa fa-envelope" style={{fontSize:"30px"}}></i>
              <h3>nellievawebdesign@gmail.com</h3>
            </div>
            <div className="contact_cart">
              <i className="fa fa-phone" style={{fontSize:"32px"}}></i>
              <h3>+1 (646) 306 3842</h3>
            </div>
            <div className="contact_cart">
            <span style={{margin: '0'}}><SocialIcon url="https://github.com/NelliEva"  fgColor="white"/></span>
              <h3><Link to='https://github.com/NelliEva' style={{color: 'black'}}>https://github.com/NelliEva</Link></h3>
            </div>
          </div>
        </div>
    )
}
export default Contact;