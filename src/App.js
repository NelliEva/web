import { Route, Routes } from "react-router-dom";
import React from "react";

import Main from './components/main/Main';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Work from './components/main/Work'
import SvgIntro from "./components/main/SvgIntro";

function App() {
    return(
      <div className="App">
       <SvgIntro/>
       <Routes>
           <Route path='/web/' element={<Main/>}/>
           <Route path='/web/about' element={<About/>}/>
           <Route path='/web/contact' element={<Contact/>}/>
           <Route path='/web/work' element={<Work/>}/>
       </Routes>
      </div>
    );
}
export default App;