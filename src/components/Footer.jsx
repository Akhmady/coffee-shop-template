import { Mail } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

const InstagramIcon = ({ size = 24, strokeWidth = 2, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-background border-t border-text-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-black text-2xl tracking-tight text-text-primary">
            {shopConfig.brand.name}
          </span>
          <p className="text-text-primary/50 text-sm font-medium">
            &copy; {currentYear} {shopConfig.brand.name}. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {shopConfig.contact.instagramUsername && (
            <a 
              href={`https://instagram.com/${shopConfig.contact.instagramUsername}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-surface rounded-full text-text-primary/70 hover:text-accent hover:shadow-md transition-all transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} strokeWidth={2} />
            </a>
          )}
          {shopConfig.contact.emailAddress && (
            <a 
              href={`mailto:${shopConfig.contact.emailAddress}`} 
              className="p-3 bg-surface rounded-full text-text-primary/70 hover:text-accent hover:shadow-md transition-all transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={2} />
            </a>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
