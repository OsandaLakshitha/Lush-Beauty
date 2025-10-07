import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (212) 555-0198', 'Mon-Sat: 10AM - 8PM'],
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['hello@lushbeauty.com', 'We reply within 24 hours'],
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['245 Madison Avenue', 'New York, NY 10016'],
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['Mon-Fri: 10AM - 8PM', 'Sat: 9AM - 7PM', 'Sun: 11AM - 6PM'],
    },
  ];

  const faqs = [
    {
      question: 'Do I need to book an appointment?',
      answer: 'Yes, we work by appointment only to ensure you receive our full attention. Walk-ins are welcome based on availability.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a 50% service fee.',
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Absolutely! We offer free consultations for color services and bridal packages. Other consultations are complimentary when you book a service.',
    },
    {
      question: 'What products do you use?',
      answer: 'We use premium, professional-grade products including brands like Olaplex, Redken, Dermalogica, and OPI. All our products are cruelty-free.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes! Gift cards are available in any amount and make perfect gifts. They can be purchased in-studio or by calling us.',
    },
    {
      question: 'Is parking available?',
      answer: 'Street parking is available, and we validate parking for the garage located at 250 Madison Avenue.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920"
            alt="Contact"
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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Contact <span className="italic font-light">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            We'd love to hear from you. Reach out to book or ask questions.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-[#FAF8F5] hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#C4A484] rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="font-body text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
                Book Appointment
              </p>
              <h2 className="font-display text-5xl font-bold text-gray-900 mb-8">
                Send Us a
                <br />
                <span className="italic font-light">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body text-gray-600"
                  >
                    <option value="">Select Service *</option>
                    <option value="haircut">Haircut</option>
                    <option value="color">Hair Color</option>
                    <option value="facial">Facial</option>
                    <option value="nails">Nails</option>
                    <option value="waxing">Waxing</option>
                    <option value="bridal">Bridal</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Additional Notes"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-[#C4A484] focus:outline-none transition-colors font-body resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#C4A484] text-white py-5 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all shadow-lg"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-300 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-5xl text-gray-400 mx-auto mb-4" />
                  <p className="font-body text-gray-500">Map Integration</p>
                  <p className="font-body text-sm text-gray-400">Google Maps API</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Studio
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="font-body text-gray-600 leading-relaxed">
                    Located in the heart of Manhattan, our studio offers a luxurious and relaxing environment for all your beauty needs.
                  </p>
                  <p className="font-body text-gray-600 leading-relaxed">
                    Free WiFi, complimentary beverages, and a welcoming atmosphere await you.
                  </p>
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: FaInstagram, url: '#' },
                    { icon: FaFacebookF, url: '#' },
                    { icon: FaPinterestP, url: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 border-2 border-[#C4A484] flex items-center justify-center text-[#C4A484] hover:bg-[#C4A484] hover:text-white transition-all"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Common Questions
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <br />
              <span className="italic font-light">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed font-light">
                  {faq.answer}
                </p>
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
              Prefer to Call?
            </h2>
            <p className="font-body text-xl text-white/80 mb-12 font-light">
              Our friendly team is ready to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="tel:+12125550198"
                className="bg-[#C4A484] text-white px-12 py-5 text-sm font-semibold tracking-widest hover:bg-[#B39374] transition-all inline-block"
              >
                CALL: (212) 555-0198
              </a>
              <a
                href="mailto:hello@lushbeauty.com"
                className="border-2 border-white text-white px-12 py-5 text-sm font-semibold tracking-widest hover:bg-white hover:text-gray-900 transition-all inline-block"
              >
                EMAIL US
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;