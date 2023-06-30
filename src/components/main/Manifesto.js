import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import manifesto from './manifesto.jpg';
import empty1 from './empty1.jpg';
import empty2 from './empty2.jpg';
import empty3 from './empty3.jpg';
import empty4 from './empty4.jpg';
import page1 from './page1.jpg';
import page2 from './page2.jpg';
import page3 from './page3.jpg';
import page4 from './page4.jpg';

function Manifesto() {
  const [seeAll, setSeeAll] = useState('');
  const [valueChange, setValueChange] = useState('');

  return (
    <div className='manifesto_wrap'>
      <div className='manifesto_container'>
        {/* style={{margin:'auto', display: 'flex', justifyContent: 'center', gap: '5px'}} */}
        {/* <img src={manifesto} alt="" style={{width:'1000px', height:'680px', margin: 'auto'}}/> */}
        <div className='manifesto_section'>
            <div class='manifesto_box'>
            <div className='in_box'>
                <div className='front'>
                <img className='img_manifesto' src={empty1} />
                </div>
                <div className={seeAll ? 'clicked' : 'back_side'}>
                <img className='img_manifesto' src={page1} />
                </div>
            </div>
            </div>
            <div class='manifesto_box'>
            <div className='in_box'>
                <div className='front'>
                <img className='img_manifesto' src={empty2} />
                </div>
                <div className={seeAll ? 'clicked' : 'back_side'}>
                <img className='img_manifesto' src={page2} />
                </div>
            </div>
            </div>
        </div>
        {/* <div style={{margin:'auto', display: 'flex', justifyContent: 'center', gap: '5px'}} className=""> */}
        <div className='manifesto_section'>
            <div class='manifesto_box'>
            <div className='in_box'>
                <div className='front'>
                <img className='img_manifesto2' src={empty3} />
                </div>
                <div className={seeAll ? 'clicked' : 'back_side'}>
                <img className='img_manifesto2' src={page3} />
                </div>
            </div>
            </div>
            <div class='manifesto_box'>
            <div className='in_box'>
                <div className='front'>
                <img className='img_manifesto2' src={empty4} />
                </div>
                <div className={seeAll ? 'clicked' : 'back_side'}>
                <img className='img_manifesto2' src={page4} />
                </div>
            </div>
            </div>

        {/* </div> */}
        </div>
      </div>
      <input
       className='manifesto_btn'
        type='button'
        id='button'
        onClick={() => {
          setSeeAll(!seeAll);
          setValueChange(!valueChange);
        }}
        value={valueChange ? 'Hide' : 'Show All'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '3rem',
          width: '100%',
          border: 'none',
        }}
      ></input>
    </div>
  );
}
export default Manifesto;
