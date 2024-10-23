import React from 'react';
import './App.css';
import Color from './Components/Color';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes> */}

      <Color />
      <Login/>
    </div>
  );
}

export default App;
