import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeliveryLinks from './components/DeliveryLinks';
import HotDeals from './components/HotDeals';
import GalleryMenu from './components/GalleryMenu';
import Reservation from './components/Reservation';
import ReviewProof from './components/ReviewProof';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Menu');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <main className="min-h-screen bg-[var(--theme-background)] font-sans antialiased overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} cartItemCount={cartItems.length} />
      <Hero id="about" activeTab={activeTab} setActiveTab={setActiveTab} />
      <DeliveryLinks />
      <HotDeals id="menu" addToCart={addToCart} />
      <GalleryMenu id="gallery" addToCart={addToCart} />
      <Reservation id="reservation" />
      <ReviewProof />
      <Location id="location" />
      <Footer />
    </main>
  );
}

export default App;
