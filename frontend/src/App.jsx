import React from 'react'
// import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import Home from './modules/Home';
import About from './modules/About';
import Info from './modules/Info';
import Provide from './modules/Provide';
import Transfer from './modules/Transfer';
import NotFound from './modules/NotFound';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/provide" element={<Provide />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;
