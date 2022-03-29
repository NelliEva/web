import './svgintro.css';
import React from "react";

function SvgIntro(){
    return(
        <div className='svg_box'>
         <svg className='svg' viewBox="0 0 1600 900">
            <symbol id="s-text">
                <text text-anchor="middle"
                    x="50%"
                    y="55%"
                    class="text--line"
                    >
                NelliEva
                </text>
                <text text-anchor="middle"
                    x="50%"
                    y="68%"
                    class="text--line2"
                    >
                web-development/design
                </text> 
            </symbol>
            <g class="g-ants">
                <use xlinkHref="#s-text"
                class="text-copy"></use>     
                <use xlinkHref="#s-text"
                class="text-copy"></use>     
                <use xlinkHref="#s-text"
                class="text-copy"></use>     
                <use xlinkHref="#s-text"
                class="text-copy"></use>     
                <use xlinkHref="#s-text"
                class="text-copy"></use>     
            </g> 
          </svg>
        </div>
    )
}
export default SvgIntro;