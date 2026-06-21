import { ShoppingBag } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

const Navbar = ({ activeTab, setActiveTab, cartItemCount = 0 }) => {
  const navItems = [
    { label: 'Menu', id: 'menu' },
    { label: 'About Us', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reservation', id: 'reservation' },
    { label: 'Location', id: 'location' }
  ];

  return (
    <nav className="w-full z-50 py-8 text-text-primary">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 flex items-center justify-between relative">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          {shopConfig.brand.logoPath ? (
            <img 
              src={shopConfig.brand.logoPath} 
              alt="Brand Logo" 
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          
          {/* Fallback Logo (shown if no path or if image fails) */}
          <div 
            className="w-10 h-10 bg-text-primary text-background rounded-full flex items-center justify-center shadow-sm"
            style={{ display: shopConfig.brand.logoPath ? 'none' : 'flex' }}
          >
            <span className="font-bold text-xl">{shopConfig.brand.name.charAt(0)}</span>
          </div>
          <span className="font-bold text-2xl tracking-tight">{shopConfig.brand.name}</span>
        </div>

        {/* Nav Links (Perfectly Centered) */}
        <div className="hidden lg:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.label)}
              className="group relative text-base font-bold tracking-wide uppercase"
            >
              {item.label}
              {/* Animated Underline */}
              <span
                className={`absolute -bottom-2 left-0 w-full h-[3px] bg-text-primary origin-left transition-transform duration-300 ${
                  activeTab === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mini-Cart Trigger */}
        <button 
          onClick={() => alert(`Mini-cart checkout is coming soon! You currently have ${cartItemCount} items.`)}
          className="relative p-2 text-text-primary hover:text-text-primary/70 transition-colors flex items-center justify-center"
        >
          <ShoppingBag strokeWidth={2.2} className="w-7 h-7" />
          <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-background transform translate-x-1 -translate-y-1 shadow-sm">
            {cartItemCount}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
