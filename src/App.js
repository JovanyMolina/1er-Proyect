import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './View/Home';
import About from './View/About';
import Product from './View/Product';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Product/:id" element={<Product />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
