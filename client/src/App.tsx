import React from 'react';

import Products from './admin/Products';
import Main from './main/Main';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsCreate from './admin/components/ProductsCreate';
import ProductsEdit from './admin/components/ProductsEdit';

function App() {
  return (
    <div className="App">
      
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/admin/products' element={<Products />} />
                <Route path='/admin/products/create' element={<ProductsCreate />} />
                <Route path='/admin/products/:id/edit' element={<ProductsEdit />} />
              </Routes>
            </BrowserRouter>
          
    </div>
  );
}

export default App;
