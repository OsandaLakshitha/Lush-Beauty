import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaInstagram, FaQuoteLeft } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'hair', name: 'Hair' },
    { id: 'color', name: 'Color' },
    { id: 'skin', name: 'Skincare' },
    { id: 'nails', name: 'Nails' },
    { id: 'bridal', name: 'Bridal' },
  ];

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800',
      category: 'hair',
      title: 'Textured Bob',
      description: 'Modern cut with lived-in waves',
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
      category: 'color',
      title: 'Platinum Blonde',
      description: 'Full transformation to icy platinum',
    },
    {
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
      category: 'bridal',
      title: 'Bridal Makeup',
      description: 'Soft glam for the perfect day',
    },
    {
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
      category: 'color',
      title: 'Caramel Balayage',
      description: 'Warm dimensional color',
    },
    {
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800',
      category: 'hair',
      title: 'Long Layers',
      description: 'Flowing layers with movement',
    },
    {
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
      category: 'skin',
      title: 'Glowing Skin',
      description: 'After signature facial treatment',
    },
    {
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
      category: 'hair',
      title: 'Sleek Straight',
      description: 'Keratin treatment results',
    },
    {
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
      category: 'color',
      title: 'Rose Gold',
      description: 'Trendy rose gold tones',
    },
    {
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
      category: 'nails',
      title: 'French Ombré',
      description: 'Classic with a modern twist',
    },
    {
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
      category: 'nails',
      title: 'Nude Elegance',
      description: 'Minimalist nail art',
    },
    {
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800',
      category: 'bridal',
      title: 'Bridal Updo',
      description: 'Romantic wedding hairstyle',
    },
    {
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
      category: 'skin',
      title: 'Clear Complexion',
      description: 'Acne treatment transformation',
    },
  ];

  const beforeAfter = [
    {
      before: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
      after: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600',
      title: 'Color Correction',
      description: 'From brassy to beautiful ash blonde',
    },
    {
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
      after: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600',
      title: 'Balayage Transformation',
      description: 'Added dimension with warm tones',
    },
    {
      before: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
      title: 'Skin Rejuvenation',
      description: '8-week facial treatment series',
    },
  ];

  const testimonials = [
    {
      text: "Sarah completely transformed my hair! I came in with damaged, dull hair and left with the most beautiful balayage. The color is absolutely stunning and so many people have complimented it.",
      name: 'Emily R.',
      service: 'Balayage & Cut',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      text: "The facial treatments here have changed my skin completely. After struggling with acne for years, my skin is finally clear and glowing. I can't recommend them enough!",
      name: 'Jessica M.',
      service: 'Acne Treatment Series',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    {
      text: "My wedding day hair and makeup were absolutely perfect. The team understood exactly what I wanted and made me feel like a princess. Thank you for making my day so special!",
      name: 'Amanda K.',
      service: 'Bridal Package',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920"
            alt="Portfolio"
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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6"
          >
            <span className="italic font-light">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Showcasing our artistry and the beautiful transformations we create
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 text-sm font-semibold tracking-wider transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#C4A484] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-96 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-white/90 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Transformations
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Before & <span className="italic font-light">After</span>
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto font-light">
              See the incredible transformations our expert team creates
            </p>
          </div>

          <div className="space-y-20">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="relative group cursor-pointer overflow-hidden h-[500px]">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white px-6 py-2">
                      <span className="font-display text-lg font-bold text-gray-900">
                        BEFORE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative group cursor-pointer overflow-hidden h-[500px]">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-[#C4A484] px-6 py-2">
                      <span className="font-display text-lg font-bold text-white">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 text-center mt-8">
                  <h3 className="font-display text-3xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-600 text-lg font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Client Love
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900">
              What Clients <span className="italic font-light">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-[#C4A484] mb-6" />
                <p className="font-elegant text-gray-700 text-lg italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-gray-500">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Follow Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              @LushBeauty
            </h2>
            <p className="font-body text-gray-600 text-lg font-light mb-8">
              Follow us on Instagram for daily inspiration and updates
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C4A484] text-white px-8 py-4 text-sm font-semibold tracking-wider hover:bg-[#B39374] transition-all"
            >
              <FaInstagram size={20} />
              FOLLOW US ON INSTAGRAM
            </a>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative h-64 overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    1560066984138 + index * 100000
                  }?w=400`}
                  alt={`Instagram ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div> */}
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
              Ready for Your
              <br />
              <span className="italic font-light">Transformation?</span>
            </h2>
            <p className="font-body text-xl text-white/80 mb-12 font-light">
              Book your appointment and let us create your perfect look
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C4A484] text-white px-12 py-5 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all shadow-lg"
            >
              BOOK APPOINTMENT
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;