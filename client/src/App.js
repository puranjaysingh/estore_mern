import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
function App() {
    return (
        <div>
            <Header />
            <Products />
            <Banner />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
