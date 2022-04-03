import {SocialIcon} from 'react-social-icons';
import React from "react";

function Social(){
    return(
        <div className='social'>
           <span className='logoSpan'><p>NelliEva</p></span>
           {/* <span> <SocialIcon url="https://facebook.com" bgColor="#e5a1a7" fgColor="white" /></span> */}
           <span className='insta'> <SocialIcon url="https://instagram.com/nellieva" bgColor="#e5a1a7" fgColor="white" /></span>
           <span className='git'><SocialIcon url="https://github.com/NelliEva" bgColor="#e5a1a7" fgColor="white"/></span>
           <span className='fb'><SocialIcon url="https://linkedin.com/in/nellieva-szabo-100785224/" bgColor="#e5a1a7" fgColor="white" /></span>
        </div>
    )
}
export default Social;