import { Link } from "react-router-dom";
import React from "react";

import Social from '../footer/Social'

const Main =()=>{
    return(
    <div className="main_container">
        <div id="container" className="container">
            {/* <img src={htmlphoto} alt="" style={{width:'500px', height:'800px'}}/> */}
       <div className="shapeBackground4"></div>
       <div className="shapeBackground3"></div>
       <pre>  
            {"function Nelli(){ "}<br/>

            {"  return("} <br/>

            {'   <div> '} <br/>

            {'    <div id="container" className="container">'}<br/>

            {'     <p className="welcome">skills</p> '}<br/>

            {'     <div className ="nav"> '}<br/>

            {"       <li><Link className='navLink' to='/'>"}<span className='color'> HTML </span>{"</Link></li>"}<br/>
            <br/>

            {"       <li><Link className='navLink' to='/'>"}<span className='color'> CSS / SCSS </span>{"</Link></li> "}<br/>
            <br/>

            {"       <li><Link className='navLink' to='/'>"}<span className='color'> JavaScript </span>{"</Link></li> "}<br/>
            <br/>

            {"       <li><Link className='navLink' to='/'>"}<span className='color'> REACT </span>{"</Link></li> "}<br/>
            <br/>

            {"       <li><Link className='navLink' to='/'>"}<span className='color'> Python </span>{"</Link></li> "}<br/>

            {'     </div> '}<br/>

            {'    </div> '}<br/>

            {'  </div> '}<br/>
            {")"}
            {"}"}<br/>
            {"export default Nelli;"}

        
        </pre>

          <div className="box"> 
            <p className="welcome">Hi, I'm Nelli a Front-End Developer/Designer.</p>
            <div className ="nav">
                <li ><Link className='navLink' to='/web/work'>Portfolio</Link></li>
                <li><Link className='navLink' to='/web/about'>About</Link></li>
                <li><Link className='navLink' to='/web/contact'>Contact</Link></li>
          </div>
         </div>
         <Social/> 
        </div>
    </div>
    )
}
export default Main;