import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';  
import Manufacturer from './pages/Manufacturer';
import Farmer from './pages/Farmer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/*" element={<Admin />} /> {/* Add this */}
            <Route path="/manufacturer/*" element={<Manufacturer />} /> {/* Add this */}
            <Route path="/farmer/*" element={<Farmer />} /> {/* Add this */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
