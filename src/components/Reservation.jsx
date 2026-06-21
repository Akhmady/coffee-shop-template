import { useState } from 'react';
import { shopConfig } from '../config/shopConfig';

const Reservation = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `Halo ${shopConfig.brand.name},\n\nSaya ingin melakukan reservasi meja dengan detail berikut:\n\n*Nama:* ${formData.name}\n*Tanggal:* ${formData.date}\n*Waktu:* ${formData.time}\n*Jumlah Tamu:* ${formData.guests} orang\n*Catatan Tambahan:* ${formData.notes || '-'}\n\nMohon konfirmasi ketersediaan meja. Terima kasih!`;
    
    // Create WhatsApp deep link
    const whatsappUrl = `https://wa.me/${shopConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id={id} className="w-full py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Book a Table
          </h2>
          <p className="text-lg text-text-primary/70 max-w-xl">
            Secure your spot. Let us know when you're coming, and we'll have everything ready.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-text-primary/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-text-primary">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-surface border border-text-primary/20 text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-sm font-bold text-text-primary">Number of Guests</label>
                <select 
                  id="guests" 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-surface border border-text-primary/20 text-text-primary focus:outline-none focus:border-text-primary transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-sm font-bold text-text-primary">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-surface border border-text-primary/20 text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label htmlFor="time" className="text-sm font-bold text-text-primary">Time</label>
                <input 
                  type="time" 
                  id="time" 
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-surface border border-text-primary/20 text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                />
              </div>
            </div>

            {/* Special Notes */}
            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-sm font-bold text-text-primary">Special Notes (Optional)</label>
              <textarea 
                id="notes" 
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-surface border border-text-primary/20 text-text-primary focus:outline-none focus:border-text-primary transition-colors resize-none"
                placeholder="Any dietary restrictions or special requests?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-4 w-full py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover transition-transform transform hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-accent/20"
            >
              Confirm Reservation via WhatsApp
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Reservation;
