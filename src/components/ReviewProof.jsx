import { Quote, Star } from 'lucide-react';
import { clientReviews } from '../data/reviewsData';

const ReviewProof = () => {
  if (!clientReviews || clientReviews.length === 0) return null;

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Hear from our guests
          </h2>
          <p className="text-lg text-text-primary/70 max-w-2xl">
            Don't just take our word for it. Here is what our community has to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {clientReviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center bg-surface rounded-3xl p-8 md:p-10 border border-text-primary/5 hover:shadow-xl transition-shadow duration-300">
              
              {/* Quote Icon */}
              <div className="mb-6 text-accent/20">
                <Quote size={48} fill="currentColor" strokeWidth={0} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < review.rating ? "currentColor" : "transparent"} 
                    strokeWidth={i < review.rating ? 0 : 2}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-center text-text-primary/80 font-medium leading-relaxed mb-8 flex-1 italic">
                "{review.text}"
              </p>

              {/* Author & Date */}
              <div className="flex flex-col items-center">
                <span className="font-bold text-text-primary">{review.author}</span>
                <span className="text-sm text-text-primary/50 mt-1">{review.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewProof;
