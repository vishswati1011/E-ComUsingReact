import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop/hats" element={<HatsPage />} />
          <Route exact path="/shoppage" element={<ShopPage />} />
        </Routes> 
      </Router>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
