import { useState } from 'react';
import { MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

const Location = ({ id }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shopConfig.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={id} className="w-full py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Details */}
          <div className="flex flex-col items-start z-10">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-8">
              Visit Us
            </h2>
            
            <div className="flex flex-col gap-6 mb-10 w-full">
              {/* Address Block */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-text-primary/50 uppercase tracking-widest">Address</span>
                <p className="text-xl font-medium text-text-primary leading-relaxed max-w-md">
                  {shopConfig.location.fullAddress}
                </p>
              </div>

              {/* Hours Block */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-text-primary/50 uppercase tracking-widest">Opening Hours</span>
                <p className="text-xl font-medium text-text-primary leading-relaxed">
                  {shopConfig.location.openingHours}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-background border-[2px] border-text-primary/10 text-text-primary rounded-full font-bold text-lg hover:border-text-primary/30 transition-colors"
              >
                {copied ? <Check size={20} className="text-accent" /> : <Copy size={20} />}
                {copied ? 'Copied!' : 'Copy Address'}
              </button>
              
              <a 
                href={shopConfig.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-text-primary text-background rounded-full font-bold text-lg hover:bg-text-primary/90 transition-transform transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
              >
                <ExternalLink size={20} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Column: Map Placeholder */}
          <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-background rounded-[3rem] border border-text-primary/5 shadow-inner flex items-center justify-center relative overflow-hidden">
            {/* Soft background grid or pattern can be simulated with pseudo elements or SVG, but keeping it simple */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative flex flex-col items-center">
              <div className="text-accent animate-pulse">
                <MapPin size={64} strokeWidth={1.5} />
              </div>
              <div className="w-16 h-4 bg-text-primary/10 rounded-[100%] blur-[4px] mt-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
