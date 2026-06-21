import { Bike } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

const DeliveryLinks = () => {
  if (!shopConfig.deliveryPartners.showBanner) return null;

  const partners = [
    {
      name: 'GoFood',
      icon: <Bike size={20} strokeWidth={2.5} />,
      link: shopConfig.deliveryPartners.goFoodLink,
      hoverClass: 'hover:border-red-500 hover:text-red-600', // GoFood brand color
    },
    {
      name: 'GrabFood',
      icon: <Bike size={20} strokeWidth={2.5} />,
      link: shopConfig.deliveryPartners.grabFoodLink,
      hoverClass: 'hover:border-emerald-500 hover:text-emerald-600', // GrabFood brand color
    },
    {
      name: 'ShopeeFood',
      icon: <Bike size={20} strokeWidth={2.5} />,
      link: shopConfig.deliveryPartners.shopeeFoodLink,
      hoverClass: 'hover:border-orange-500 hover:text-orange-600', // ShopeeFood brand color
    },
  ];

  return (
    <section className="w-full bg-background py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <p className="text-sm font-bold text-text-primary/40 uppercase tracking-[0.25em] text-center">
          Available on your favorite apps
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-text-primary/10 text-text-primary/60 transition-all duration-300 ease-in-out hover:bg-surface hover:-translate-y-1 hover:shadow-md ${partner.hoverClass}`}
              aria-label={`Order on ${partner.name}`}
            >
              <div>
                {partner.icon}
              </div>
              <span className="font-bold tracking-tight text-base">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryLinks;
