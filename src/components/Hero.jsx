import { shopConfig } from '../config/shopConfig';

const Hero = ({ id, activeTab, setActiveTab }) => {
  return (
    <section id={id} className="relative w-full bg-background flex flex-col min-h-[100dvh] overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 w-full max-w-screen-2xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 lg:py-0">
        
        {/* Left Column (Text) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start text-left z-10 lg:pr-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text-primary mb-6 leading-[1.05]">
            {shopConfig.brand.tagline}
          </h1>
          <p className="text-lg md:text-xl font-medium text-text-primary/80 mb-10 max-w-lg leading-relaxed">
            Experience the finest coffee crafted by passionate baristas. Visit us today or order online for delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/30">
              Order Now
            </button>
            <button className="px-8 py-4 bg-transparent border-[2.5px] border-text-primary text-text-primary rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all transform hover:scale-105 active:scale-95">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Column (Floating Product) */}
        <div className="lg:col-span-7 relative flex justify-center items-center mt-8 lg:mt-0 z-10 w-full">
          {/* Decorative ambient glow */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] scale-150 animate-pulse mix-blend-multiply"></div>
          
          {/* Giant floating cup placeholder - Enlarged */}
          <div className="relative w-full max-w-[360px] md:max-w-[520px] lg:max-w-[700px] aspect-square bg-text-primary rounded-full flex justify-center items-center shadow-2xl transform hover:-translate-y-4 transition-transform duration-700 ease-in-out lg:translate-x-8">
            <svg 
              className="w-1/2 h-1/2 text-background opacity-90 drop-shadow-xl" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v12a4 4 0 01-4 4H8a4 4 0 01-4-4V4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4V2M8 4V2M16 4V2" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
