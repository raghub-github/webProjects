import './App.css';
import React from 'react';
import Header from './components/Header';
import AwardSection from './components/AwardSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div className="container">
      <Header />
      <AwardSection />
      <Product />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;
