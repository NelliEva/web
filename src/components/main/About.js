import React from "react";
import kimchi from './kimchi.webp';
import front from './front.webp';
import behind from './behind.webp';

const About = () =>{
    return(
        <div className="about">
            <h1>About me...</h1>
			<div className="background_about">
				<div className="bg first"></div>
				<div className="bg second"></div>
				<div className="bg third"></div>
				<div className="bg forth"></div>
				<div className="bg fifth"></div>
				<div className="bg sixth"></div>
				<div className="bg seventh"></div>
				<div className="bg eigth"></div>
				<div className="bg ninth"></div>
				<div className="bg tenth"></div>
				<div className="bg eleventh"></div>
				<div className="bg twelvth"></div>
				<div className="bg thirteenth"></div>
				<div className="bg fourteenth"></div>
				<div className="bg fifteenth"></div>
				<div className="bg sixteenth"></div>
				<div className="bg fifteenth"></div>
				<div className="bg fourteenth"></div>
				<div className="bg thirteenth"></div>
				<div className="bg twelvth"></div>
				<div className="bg ninth"></div>
				<div className="bg eigth"></div>
				<div className="bg seventh"></div>
				<div className="bg sixth"></div>
				<div className="bg fifth"></div>
				<div className="bg forth"></div>
				<div className="bg third"></div>
				<div className="bg second"></div>
				<div className="bg first"></div>
			</div>
			<div className="background_about_2">
			    <div className="bg2 one"></div>
				<div className="bg2 two"></div>
				<div className="bg2 three"></div>
				<div className="bg2 four"></div>
				<div className="bg2 five"></div>
				<div className="bg2 six"></div>
				<div className="bg2 seven"></div>
				<div className="bg2 eigt"></div>
				<div className="bg2 nine"></div>
				<div className="bg2 ten"></div>
			</div>
			<div className="background_about_3">
				<div className="bg2 ten"></div>
				<div className="bg2 nine"></div>
				<div className="bg2 eigt"></div>
				<div className="bg2 seven"></div>
				<div className="bg2 six"></div>
				<div className="bg2 five"></div>
				<div className="bg2 four"></div>
				<div className="bg2 three"></div>
				<div className="bg2 two"></div>
				<div className="bg2 one"></div>
			</div>
            <div class="about_container">

	            <p id="order2">I'm Nelli Szabo, Front-End Developer and Designer. I was born in Budapest, so by birth I'm Hungarian, but I lived a long time in Paris/France, Seoul/South Korea and different places in the USA. Therefore I speak English, Hungarian and French. Currently in the USA. </p>
	            <p id="order3">I've been creating websites since 2018. It started as curiosity and since I printed out my first famous "Hello World", I fell in love. I started my learning process with Andrei Neagoie's course: The Complete Web Developer in 2022: Zero to Mastery. It was a very intense course to start because it covers Front-end and Back-end all together from zero. This course helped me figure out what path I wanted to go on as a Developer. From the beginning I loved working with CSS. I'm a creative person, so that did not surprise me. Working with CSS and Sass just fulfills my creative side. After going along with the course I immediately got interested in REACT. It is a great client side framework. After finishing the course I decided to deepen my knowledge in React , so I finished Maximilian Schwarzmüller's React - The Complete Guide (incl Hooks, React Router, Redux) course. This was a great course and the author keeps it updated always. And here I am since I keep building my portfolio with new React sites. It is not just work but a passion for me. 
				Beside React i leart JavaScript(what is a must before learning React) and SCSS. I also finished a "2022 Complete Python Bootcamp From Zero to Hero in Python" course as a side learning. I was always interested learn this language as it has so much potentials. <br/> Currently I work as a freelancer UI/UX - React Developer for an NFT startup called Valorem Foundation.

				</p>
	            <div className="polaroid_box">    
					<div id="order4" class="polaroid">
						<div   title="'Me'">
							<img className="polaroidImg" src={front} style={{width:'200px', height:'250px'}} alt="Me" title="Me"/>
						</div>
					</div>
					<div id="order1" class="polaroid">
						<div  title="'Relax'">
							<img className="polaroidImg" src={behind} style={{width:'200px', height:'250px'}} alt="Relax" title="Relax"/>
						</div>
					</div>
	            
					<div id="order5" class="polaroid">
						<div title="'Kimchi'">
							<img className="polaroidImg" src={kimchi} style={{width:'200px', height:'250px'}} alt="Kimchi" title="Kimchi"/>
						</div>
					</div>
				</div>
	            <p id="order6">When I am not coding , I enjoy life. I love eating-drinking and just spending time with my family and friends. Also I travel a lot with my husband and our amazing golden retriever, Kimchi / who bytheway is my assistant at work:)/
I hope we can work together soon! If you have any further question just navigate to the "Contact" at the main menu and you can send me a message anytime.</p>	
            </div>
        </div>
    )
}

export default About;