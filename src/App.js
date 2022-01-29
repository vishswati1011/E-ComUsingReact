import './App.css';
import HomePage from './pages/homepage/homepage.component'
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/topic/:id" element={<HatsPage />} />
        </Routes> 
      </Router>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
