import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('hair');

  const categories = [
    { id: 'hair', name: 'Hair Services' },
    { id: 'skin', name: 'Skin Care' },
    { id: 'nails', name: 'Nail Care' },
    { id: 'body', name: 'Body Treatments' },
  ];

  const services = {
    hair: [
      {
        name: 'Precision Haircut',
        price: '$85',
        duration: '60 min',
        description: 'Customized cut tailored to your face shape, hair texture, and lifestyle',
        features: ['Consultation', 'Wash & Style', 'Product Recommendation'],
      },
      {
        name: 'Balayage',
        price: '$250+',
        duration: '3-4 hours',
        description: 'Hand-painted highlights for natural, sun-kissed dimension',
        features: ['Custom Color Blend', 'Toner', 'Deep Conditioning', 'Style'],
      },
      {
        name: 'Full Color',
        price: '$180+',
        duration: '2-3 hours',
        description: 'Complete color transformation or root touch-up with premium products',
        features: ['Color Consultation', 'Application', 'Toning', 'Treatment'],
      },
      {
        name: 'Keratin Treatment',
        price: '$350',
        duration: '3 hours',
        description: 'Smoothing treatment that eliminates frizz for up to 12 weeks',
        features: ['Deep Cleanse', 'Treatment Application', 'Blow Dry', 'Aftercare Kit'],
      },
      {
        name: 'Hair Extensions',
        price: '$500+',
        duration: '3-5 hours',
        description: 'Premium extensions for length and volume, custom matched to your hair',
        features: ['Consultation', 'Color Matching', 'Application', 'Styling Lesson'],
      },
      {
        name: 'Blowout & Style',
        price: '$65',
        duration: '45 min',
        description: 'Professional wash, blow dry, and styling for any occasion',
        features: ['Luxury Wash', 'Professional Styling', 'Finishing Products'],
      },
    ],
    skin: [
      {
        name: 'Signature Facial',
        price: '$120',
        duration: '60 min',
        description: 'Customized facial treatment addressing your specific skin concerns',
        features: ['Deep Cleanse', 'Exfoliation', 'Mask', 'Hydration'],
      },
      {
        name: 'Anti-Aging Facial',
        price: '$180',
        duration: '75 min',
        description: 'Advanced treatment targeting fine lines, wrinkles, and loss of firmness',
        features: ['Microcurrent', 'Peptide Mask', 'LED Light Therapy', 'Neck & Décolleté'],
      },
      {
        name: 'Chemical Peel',
        price: '$150',
        duration: '45 min',
        description: 'Exfoliating treatment for improved texture, tone, and clarity',
        features: ['Skin Analysis', 'Custom Peel', 'Soothing Mask', 'SPF Protection'],
      },
      {
        name: 'Hydrafacial',
        price: '$200',
        duration: '60 min',
        description: 'Deep cleansing, extraction, and hydration in one treatment',
        features: ['Vortex Cleansing', 'Extraction', 'Hydration', 'Brightening Boost'],
      },
      {
        name: 'Acne Treatment',
        price: '$130',
        duration: '60 min',
        description: 'Specialized treatment to clear and prevent breakouts',
        features: ['Deep Pore Cleanse', 'Extractions', 'High Frequency', 'Calming Mask'],
      },
      {
        name: 'Dermaplaning',
        price: '$110',
        duration: '45 min',
        description: 'Exfoliation treatment removing dead skin and peach fuzz',
        features: ['Cleanse', 'Dermaplaning', 'Hydrating Serum', 'SPF'],
      },
    ],
    nails: [
      {
        name: 'Signature Manicure',
        price: '$45',
        duration: '45 min',
        description: 'Complete nail care with shaping, cuticle work, and polish',
        features: ['Soak & Scrub', 'Cuticle Care', 'Massage', 'Polish'],
      },
      {
        name: 'Gel Manicure',
        price: '$65',
        duration: '60 min',
        description: 'Long-lasting gel polish manicure with chip-free shine',
        features: ['Nail Shaping', 'Cuticle Care', 'Gel Application', '2-3 Week Wear'],
      },
      {
        name: 'Luxury Pedicure',
        price: '$75',
        duration: '75 min',
        description: 'Indulgent foot treatment with extended massage and premium products',
        features: ['Exfoliation', 'Callus Removal', 'Mask', 'Extended Massage'],
      },
      {
        name: 'Gel Pedicure',
        price: '$85',
        duration: '90 min',
        description: 'Complete pedicure with long-lasting gel polish',
        features: ['Full Pedicure', 'Gel Application', 'Massage', 'Paraffin Treatment'],
      },
      {
        name: 'Nail Art',
        price: '$15+',
        duration: '15-30 min',
        description: 'Custom nail designs from simple accents to intricate art',
        features: ['Design Consultation', 'Hand-Painted Art', 'Embellishments'],
      },
      {
        name: 'Nail Extensions',
        price: '$90+',
        duration: '90 min',
        description: 'Acrylic or gel extensions for length and strength',
        features: ['Extension Application', 'Shaping', 'Polish or Gel', 'Design'],
      },
    ],
    body: [
      {
        name: 'Full Body Wax',
        price: '$200',
        duration: '90 min',
        description: 'Complete body hair removal with premium wax',
        features: ['Pre-Treatment', 'Full Body Waxing', 'Soothing Lotion', 'Aftercare'],
      },
      {
        name: 'Brazilian Wax',
        price: '$75',
        duration: '30 min',
        description: 'Professional bikini waxing in a comfortable environment',
        features: ['Consultation', 'Expert Application', 'Soothing Treatment'],
      },
      {
        name: 'Facial Waxing',
        price: '$25+',
        duration: '15-30 min',
        description: 'Gentle hair removal for eyebrows, upper lip, or full face',
        features: ['Precise Shaping', 'Sensitive Skin Formula', 'Calming Treatment'],
      },
      {
        name: 'Body Scrub',
        price: '$110',
        duration: '60 min',
        description: 'Full body exfoliation for smooth, glowing skin',
        features: ['Dry Brushing', 'Scrub Application', 'Hydrating Wrap', 'Moisturizer'],
      },
      {
        name: 'Massage Therapy',
        price: '$130+',
        duration: '60-90 min',
        description: 'Therapeutic massage to relieve tension and stress',
        features: ['Custom Pressure', 'Aromatherapy', 'Hot Towels', 'Scalp Massage'],
      },
      {
        name: 'Body Contouring',
        price: '$200',
        duration: '60 min',
        description: 'Non-invasive treatment to reduce the appearance of cellulite',
        features: ['Targeted Areas', 'Massage Therapy', 'Firming Treatment', 'Series Available'],
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Our <span className="italic font-light">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Premium treatments tailored to your unique beauty needs
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 text-sm font-semibold tracking-wider transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#C4A484] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {services[activeCategory].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-3xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#C4A484] mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>

                <p className="font-body text-gray-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-[#C4A484] flex-shrink-0" />
                      <span className="font-body text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-[#C4A484] text-white py-3 text-sm font-semibold tracking-wider hover:bg-[#B39374] transition-colors"
                >
                  BOOK THIS SERVICE
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Enhance Your Experience
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Popular <span className="italic font-light">Add-Ons</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Deep Conditioning Treatment', price: '$25' },
              { name: 'Scalp Massage', price: '$15' },
              { name: 'Paraffin Hand Treatment', price: '$20' },
              { name: 'Aromatherapy', price: '$10' },
              { name: 'LED Light Therapy', price: '$30' },
              { name: 'Express Facial', price: '$45' },
            ].map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-center p-6 border border-gray-200 hover:border-[#C4A484] transition-colors"
              >
                <span className="font-body text-gray-900">{addon.name}</span>
                <span className="font-display text-xl font-bold text-[#C4A484]">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#2A2A2A] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              Ready to Book Your
              <br />
              <span className="italic font-light">Transformation?</span>
            </h2>
            <p className="font-body text-xl text-white/80 mb-12 font-light">
              Our expert team is ready to help you look and feel your best
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#C4A484] text-white px-12 py-5 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all shadow-lg"
              >
                BOOK APPOINTMENT
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-12 py-5 text-sm font-semibold tracking-widest hover:bg-white hover:text-gray-900 transition-all"
              >
                CALL US: (212) 555-0198
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;