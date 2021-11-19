import React from 'react';

import Products from './admin/Products';
import Main from './main/Main';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/admin/products' element={<Products />} />
              </Routes>
            </BrowserRouter>
          
    </div>
  );
}

export default App;
