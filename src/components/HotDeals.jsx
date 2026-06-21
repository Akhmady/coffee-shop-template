import { shopConfig } from '../config/shopConfig';
import { menuItems } from '../data/menuData';

const HotDeals = ({ id, addToCart }) => {
  const hotDeals = menuItems.filter(item => item.isHotDeal);

  if (hotDeals.length === 0) return null;

  return (
    <section id={id} className="w-full py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Hot Deals & Signatures
          </h2>
          <p className="text-lg text-text-primary/70 max-w-2xl">
            Our most loved creations, crafted perfectly for your taste.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotDeals.map((item) => (
            <div key={item.id} className="flex flex-col bg-background rounded-3xl overflow-hidden border border-text-primary/10 hover:shadow-xl transition-shadow duration-300">
              {/* Image Placeholder */}
              <div className="relative w-full aspect-[4/3] bg-text-primary/5 flex items-center justify-center">
                <span className="text-text-primary/20 font-bold tracking-widest uppercase text-sm">Product Image</span>
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                    {item.badge}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold text-text-primary leading-tight">{item.name}</h3>
                  <span className="text-accent font-black text-lg whitespace-nowrap">
                    {shopConfig.brand.currencySymbol} {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-text-primary/70 text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full py-3.5 bg-text-primary text-white rounded-full font-bold hover:bg-text-primary/90 transition-transform transform hover:-translate-y-1 active:translate-y-0"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HotDeals;
