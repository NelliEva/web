import { Route, Routes } from "react-router-dom";
import React from "react";

import Main from './components/main/Main';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Work from './components/main/Work';
import Manifesto from './components/main/Manifesto';
import SvgIntro from "./components/main/SvgIntro";

function App() {
    return(
      <div className="App">
       <SvgIntro/>
       <Routes>
           <Route path='/' element={<Main/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='work' element={<Work/>}/>
           <Route path='manifesto' element={<Manifesto/>}/>
       </Routes>
      </div>
    );
}
export default App;