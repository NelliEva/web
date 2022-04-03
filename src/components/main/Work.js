import {Link} from 'react-router-dom';
import React from "react";
import { useState } from 'react';

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
    function onVisitHandeler0(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/kistucsok')
     }
     function onVisit1Handeler1(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/social/tree/source_code')
     }
     function onVisit2Handeler2(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/shoppinglist/tree/master')
     }
     function onVisit3Handeler3(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/phtotography')
     }
     function onVisit7Handeler7(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/food')
     }
     function onVisit8Handeler8(){
        setVisitOn(window.location.href ='https://github.com/NelliEva/wedding')
     }


    return(
        <>
        <div className='work_container'>
            <div className='workCard'>
                <h2 className='cardHeader'>Small Business</h2>
                <div class="work_box" >
                <div className='inner_box'>
                    <div className='front_card'>  
                        <img class="img" alt='' src='https://images.unsplash.com/photo-1589912187345-e6f884f958af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
                    </div> 
                    <div class="back_card">
                        {/* <h1>Small Business</h1> */}
                        <p>Site for a small crochet business<br/>CSS+React</p>
                        <div className='cardBtn'>
                                <div class="visit" onClick={onVisitHandeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisitHandeler0} ><Link class="a2" to=''>See Code</Link></div>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
            <div className='workCard'>
                <h2 className='cardHeader'>Meetup</h2>
                <div class="work_box" >
                    <div className='inner_box'>
                        <div className='front_card'>  
                            <img class="img" alt='' src='https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                        </div> 
                        <div class="back_card">
                            {/* <h1>Meetup</h1> */}
                            <p>Site to organize social events<br/>CSS+React</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit1Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit1Handeler1} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='workCard'> 
                <h2 className='cardHeader'>Shopping-List</h2>
                <div class="work_box" >
                    <div className='inner_box'>
                        <div className='front_card'> 
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' /> 
                        </div> 
                    <div class="back_card">
                        {/* <h1>Shopping List</h1> */}
                        <p>Shopping List<br/>CSS+React</p>
                        <div className='cardBtn'>
                                <div class="visit" onClick={onVisit2Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit2Handeler2} ><Link class="a2" to=''>See Code</Link></div>
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Photography</h2>
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'>
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />     
                        </div>
                        <div class="back_card">
                            {/* <h1>Photography Site</h1> */}
                            <p>Special Phtography site with gallery<br/>HTML+CSS+JavaScript</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit3Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit3Handeler3} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Online Store</h2>  
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'>
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1606391901318-07003db08d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                        </div>
                        <div class="back_card">
                            {/* <h1>Online Store</h1> */}
                            <p>Example of Fashion Designer site<br/>CSS+React</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit4Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit4Handeler} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Pet Adoption</h2>  
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'>
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1612531025228-8e737605e42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />    
                        </div>
                        <div class="back_card">
                            {/* <h1>Pet Adoption</h1> */}
                            <p>A Pet Adoption site<br/>CSS+React</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit5Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit5Handeler} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Wedding</h2>
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'> 
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'  />
                        </div>
                        <div class="back_card">
                            {/* <h1>Wedding Site</h1> */}
                            <p >Wedding website to share video + pictures<br/>HTML+CSS+JavaScript</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit8Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit8Handeler8} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Blog</h2>
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'> 
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                        </div>
                        <div class="back_card" >
                            {/* <h1>Blog</h1> */}
                            <p>Example is a food blog<br/>HTML+CSS</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit7Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit7Handeler7} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='workCard'>
                <h2 className='cardHeader'>Face Recognition App</h2>
                <div class="work_box">
                    <div className='inner_box'>
                        <div className='front_card'> 
                            <img class="img" alt=''  src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                        </div>
                        <div class="back_card">
                            {/* <h1>Recongition App</h1> */}
                            <p>App to recognise celebrities on pictures<br/>CSS+React</p>
                            <div className='cardBtn'>
                                <div class="visit" onClick={onVisit6Handeler} ><Link class="a" to=''>Visit Site</Link></div>
                                <div class="visit" onClick={onVisit6Handeler} ><Link class="a2" to=''>See Code</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
  
 </div>
 </>
        
    )
}
export default Work;