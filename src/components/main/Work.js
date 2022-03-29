import {Link} from 'react-router-dom';
import React from "react";
import { useState } from 'react';

import wed from './wed.jpg';
import photography from './photography.jpg';
import pet from './pet.jpg';
import meetup from './meetup.jpg';
import foodpic from './foodpic.jpg';
import fashion from './fashion.jpg';
import facereco from './facereco.jpg';
import shopping from './shopping.jpg'

function Work(){

    const [visitOn, setVisitOn] = useState('');

    function onVisitHandeler(){
        setVisitOn(window.location.href ='https://sunny-chimera-dc1578.netlify.app/')
     }

    function onVisit1Handeler(){
       setVisitOn(window.location.href ='https://nellieva.github.io/social/')
    }
    function onVisit2Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/shoppinglist/');
    
    }
    function onVisit3Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/phtotography/')
    }
    function onVisit4Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/onlinestore/')
    }
    function onVisit5Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/petadoption/')
    }
    function onVisit6Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/brain/')
    }
    function onVisit7Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/food/')
    }
    function onVisit8Handeler(){
        setVisitOn(window.location.href ='https://nellieva.github.io/wedding/')
    }


    return(
        <div className='work_container'>
            <div class="work_box" >
              <div className='inner_box'>
                <div className='front_card'>  
                    <img class="img" alt='' src='https://images.unsplash.com/photo-1589912187345-e6f884f958af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
                </div> 
  	            <div class="back_card">
                    <h1>Small Business</h1>
                    <p>Site for a small crochet business<br/>CSS+React</p>
                    <div class="visit" onClick={onVisitHandeler} ><Link class="a" to=''>Visit Site</Link></div>
  	            </div>
              </div>
            </div> 
            <div class="work_box" >
              <div className='inner_box'>
                <div className='front_card'>  
                    <img class="img" alt='' src={meetup} />
                </div> 
  	            <div class="back_card">
                    <h1>Meetup</h1>
                    <p>Site to organize social events<br/>CSS+React</p>
                    <div class="visit" onClick={onVisit1Handeler} ><Link class="a" to=''>Visit Site</Link></div>
  	            </div>
              </div>
            </div> 
            <div class="work_box" >
                <div className='inner_box'>
                    <div className='front_card'> 
                        <img class="img" alt=''  src={shopping} /> 
                    </div> 
  	            <div class="back_card">
                    <h1>Shopping List</h1>
                    <p>Shopping List<br/>CSS+React</p>
                    <div class="visit" onClick={onVisit2Handeler}><Link class="a" to='/'>Visit Site</Link></div>
  	            </div>
                </div> 
            </div>
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'>
                        <img class="img" alt=''  src={photography} />     
                    </div>
                    <div class="back_card">
                        <h1>Photography Site</h1>
                        <p>Special Phtography site with gallery<br/>HTML+CSS+JavaScript</p>
                        <div class="visit" onClick={onVisit3Handeler}><Link class="a" to='/'>Visit Site</Link></div>
                    </div>
                </div>
            </div>
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'>
                        <img class="img" alt=''  src={fashion} />
                    </div>
                    <div class="back_card">
                        <h1>Online Store</h1>
                        <p>Example of Fashion Designer site<br/>CSS+React</p>
                        <div class="visit" onClick={onVisit4Handeler}><Link class="a" to='/'>Visit Site</Link></div>
                    </div>
                </div>
            </div>
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'>
                        <img class="img" alt=''  src={pet} />    
                    </div>
                    <div class="back_card">
                        <h1>Pet Adoption</h1>
                        <p>this is a food blog<br/>CSS+React</p>
                        <div class="visit" onClick={onVisit5Handeler}><Link class="a" to='/'>Visit Site</Link></div>
                    </div>
                </div>
            </div> 
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'> 
  		                <img class="img" alt=''  src={facereco} />
                    </div>
  	                <div class="back_card">
                        <h1>Recongition App</h1>
                        <p>App to recognise celebrities on pictures<br/>CSS+React</p>
                        <div class="visit" onClick={onVisit6Handeler}><Link class="a" to='/'>Visit Site</Link></div>
  	                </div>
                </div>
            </div>
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'> 
                        <img class="img" alt=''  src={foodpic} />
                    </div>
                    <div class="back_card" >
                        <h1>Blog</h1>
                        <p>Example is a food blog<br/>HTML+CSS</p>
                        <div class="visit" onClick={onVisit7Handeler}><Link class="a" to='/'>Visit Site</Link></div>
                    </div>
                </div>
            </div>
            <div class="work_box">
                <div className='inner_box'>
                    <div className='front_card'> 
  		                <img class="img" alt=''  src={wed}  />
                    </div>
                    <div class="back_card">
                        <h1>Wedding Site</h1>
                        <p >Wedding website to share video + pictures<br/>HTML+CSS+JavaScript</p>
                        <div class="visit" onClick={onVisit8Handeler}><Link class="a" to='/'>Visit Site</Link></div>
                    </div>
                </div>
            </div>
            
  
 </div>
        
    )
}
export default Work;