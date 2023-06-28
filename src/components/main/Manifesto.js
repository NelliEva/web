import { Link } from "react-router-dom";
import React from "react";
import manifesto from './manifesto.jpg'



function Manifesto () {
    return(
    <div style={{margin:'auto', display: 'flex', justifyContent: 'center'}} className="">
             <img src={manifesto} alt="" style={{width:'1000px', height:'680px', margin: 'auto'}}/>
  
    </div>
    )
}
export default Manifesto;