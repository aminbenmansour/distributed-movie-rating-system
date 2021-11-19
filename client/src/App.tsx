import React from 'react';

import Nav from './components/Nav';
import Menu from './components/Menu';
import Products from './admin/Products';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
              <Routes>
                <Route path='/admin/products' element={<Products />} />
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
