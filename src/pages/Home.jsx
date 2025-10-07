import { motion } from 'framer-motion';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      title: 'Hair Services',
      items: ['Precision Cuts', 'Color & Highlights', 'Treatments', 'Styling'],
      price: 'From $85',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    },
    {
      title: 'Skin Care',
      items: ['Custom Facials', 'Chemical Peels', 'Microdermabrasion', 'LED Therapy'],
      price: 'From $120',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    },
    {
      title: 'Nail Care',
      items: ['Manicure', 'Pedicure', 'Gel Polish', 'Nail Art'],
      price: 'From $45',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
    },
    {
      title: 'Body Treatments',
      items: ['Waxing', 'Body Scrubs', 'Massage', 'Contouring'],
      price: 'From $60',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    },
  ];

  const portfolio = [
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600',
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#C4A484] text-sm font-medium tracking-[0.3em] mb-6 uppercase"
              >
                Premium Beauty Studio
              </motion.p>
              <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-8 leading-none">
                Where Beauty
                <br />
                <span className="italic font-light">Meets Artistry</span>
              </h1>
              <p className="font-body text-xl text-white/90 mb-12 leading-relaxed max-w-xl font-light">
                Experience personalized beauty services in a refined, welcoming environment.
                Expert stylists, premium products, exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#C4A484] text-white px-10 py-4 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all shadow-lg hover:shadow-xl"
                >
                  BOOK CONSULTATION
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-10 py-4 text-sm font-semibold tracking-widest hover:bg-white hover:text-gray-900 transition-all"
                >
                  EXPLORE SERVICES
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 text-xs tracking-widest flex flex-col items-center gap-3"
          >
            <span className="font-body">SCROLL</span>
            <div className="w-px h-16 bg-white/30"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
                Welcome to Lush
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Elevating Beauty
                <br />
                <span className="italic font-light">Standards Since 2015</span>
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6 font-light">
                At Lush Beauty Studio, we believe that true beauty comes from feeling confident in your own skin. 
                Our team of experienced professionals is dedicated to providing personalized treatments that enhance 
                your natural features while respecting your individual style.
              </p>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-10 font-light">
                From precision cuts to custom color, advanced skincare to meticulous nail care, we offer a 
                comprehensive suite of services using only premium, cruelty-free products.
              </p>
              <button className="font-body text-gray-900 text-sm font-semibold tracking-wider border-b-2 border-[#C4A484] pb-2 hover:border-gray-900 transition-colors">
                LEARN MORE ABOUT US →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
                  alt="Salon"
                  className="w-full h-[600px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#C4A484] text-white p-8 shadow-xl">
                  <div className="font-display text-5xl font-bold mb-2">9+</div>
                  <div className="font-body text-sm tracking-wider">YEARS EXCELLENCE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Our Expertise
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Beauty
              <br />
              <span className="italic font-light">Services</span>
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Each service is carefully tailored to your needs, ensuring you leave feeling refreshed and confident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 mb-8 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="font-display text-3xl font-bold text-gray-900">{service.title}</h3>
                  <span className="text-[#C4A484] font-body text-sm font-semibold tracking-wider">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="font-body text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#C4A484] rounded-full mr-4"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="font-body text-sm font-semibold text-gray-900 tracking-wider border-b-2 border-gray-300 group-hover:border-[#C4A484] pb-1 transition-colors">
                  VIEW DETAILS →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#2A2A2A] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '9+', label: 'Years Experience' },
              { number: '12K+', label: 'Happy Clients' },
              { number: '8', label: 'Expert Stylists' },
              { number: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl font-bold mb-3 text-[#C4A484]">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-white/70 tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Recent Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900">
              Our <span className="italic font-light">Portfolio</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative h-96 overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Testimonials
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900">
              Client <span className="italic font-light">Experiences</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                text: "I've been coming to Lush for over two years now. The attention to detail and quality of service is unmatched. My stylist truly understands my hair and always delivers exactly what I'm looking for.",
                name: 'Rachel Morrison',
                role: 'Regular Client',
              },
              {
                text: "The facial treatments here are incredible. My skin has never looked better. The aestheticians are knowledgeable and the products they use are top-tier. Highly recommend!",
                name: 'Lauren Chen',
                role: 'Skincare Client',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-10 shadow-lg"
              >
                <p className="font-elegant text-gray-700 text-xl italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#C4A484] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-display font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="font-body text-sm text-gray-500 tracking-wide">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
                Get in Touch
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                Visit Our
                <br />
                <span className="italic font-light">Studio</span>
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <FaMapMarkerAlt className="text-[#C4A484] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-lg mb-2">Location</div>
                    <div className="font-body text-gray-600 leading-relaxed">
                      245 Madison Avenue<br />
                      New York, NY 10016
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <FaClock className="text-[#C4A484] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-lg mb-2">Hours</div>
                    <div className="font-body text-gray-600 leading-relaxed">
                      Mon - Fri: 10:00 AM - 8:00 PM<br />
                      Sat: 9:00 AM - 7:00 PM<br />
                      Sun: 11:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <FaPhone className="text-[#C4A484] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-lg mb-2">Contact</div>
                    <div className="font-body text-gray-600 leading-relaxed">
                      +1 (212) 555-0198<br />
                      hello@lushbeauty.com
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#C4A484] text-white px-10 py-4 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all w-full md:w-auto shadow-lg"
              >
                BOOK APPOINTMENT
              </motion.button>
            </div>

            <div className="bg-gray-200 h-96 lg:h-full min-h-[500px]">
              <div className="w-full h-full flex items-center justify-center font-body text-gray-400">
                Map Integration
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;