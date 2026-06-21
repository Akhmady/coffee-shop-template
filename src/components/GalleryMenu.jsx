import { useState } from 'react';
import { shopConfig } from '../config/shopConfig';
import { menuItems } from '../data/menuData';

const GalleryMenu = ({ id, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Coffee', 'Non-Coffee'];

  // Filter items based on selected category
  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  // Apply pagination illusion
  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 6);
  const hasMoreItems = filteredItems.length > 6 && !showAll;

  return (
    <section id={id} className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header & Filters */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-10">
            Complete Menu
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-surface border border-text-primary/10 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false); // Reset pagination on category change
                }}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-text-primary text-background shadow-md' 
                    : 'text-text-primary/60 hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500">
          {displayItems.map((item) => (
            <div key={item.id} className="flex flex-col bg-surface rounded-3xl overflow-hidden border border-text-primary/5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative w-full aspect-[4/3] bg-text-primary/5 flex items-center justify-center">
                <span className="text-text-primary/20 font-bold tracking-widest uppercase text-sm">Product Image</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="text-lg font-bold text-text-primary leading-tight">{item.name}</h3>
                  <span className="text-text-primary font-black whitespace-nowrap">
                    {shopConfig.brand.currencySymbol} {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-text-primary/60 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full py-3 border-2 border-text-primary text-text-primary rounded-full font-bold hover:bg-text-primary hover:text-background transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Trigger */}
        {hasMoreItems && (
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => setShowAll(true)}
              className="px-10 py-4 bg-transparent border-[2px] border-text-primary/20 text-text-primary rounded-full font-bold hover:border-text-primary transition-all duration-300 hover:shadow-sm"
            >
              Show All Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default GalleryMenu;
