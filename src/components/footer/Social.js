import {SocialIcon} from 'react-social-icons';
import React from "react";

function Social(){
    return(
        <div className='social'>
           <span><p>NelliEva</p></span>
           {/* <span> <SocialIcon url="https://facebook.com" bgColor="#e5a1a7" fgColor="white" /></span> */}
           <span> <SocialIcon url="https://instagram.com/nellieva" bgColor="#e5a1a7" fgColor="white" /></span>
           <span><SocialIcon url="https://github.com/NelliEva" bgColor="#e5a1a7" fgColor="white"/></span>
           <span><SocialIcon url="https://linkedin.com/in/nellieva-szabo-100785224/" bgColor="#e5a1a7" fgColor="white" /></span>
        </div>
    )
}
export default Social;