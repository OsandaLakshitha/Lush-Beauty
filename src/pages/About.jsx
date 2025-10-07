import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaLeaf, FaStar } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Passion for Beauty',
      description: 'We pour our hearts into every service, treating each client with personalized care and attention.',
    },
    {
      icon: FaLeaf,
      title: 'Sustainable Practices',
      description: 'Committed to eco-friendly products and practices that are kind to you and the environment.',
    },
    {
      icon: FaStar,
      title: 'Excellence Always',
      description: 'We never compromise on quality. Only the best products, techniques, and service standards.',
    },
    {
      icon: FaAward,
      title: 'Expert Team',
      description: 'Our certified professionals stay ahead of trends through continuous education and training.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Master Stylist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
      bio: '15+ years of experience in precision cuts and color',
    },
    {
      name: 'Jessica Wong',
      role: 'Senior Colorist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
      bio: 'Specialized in balayage and dimensional color',
    },
    {
      name: 'Amanda Chen',
      role: 'Lead Aesthetician',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
      bio: 'Expert in advanced skincare and facial treatments',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Nail Artist',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
      bio: 'Award-winning nail art and design specialist',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Lush Beauty Studio founded in New York' },
    { year: '2017', event: 'Expanded services to include advanced skincare' },
    { year: '2019', event: 'Awarded "Best Salon" by NY Beauty Magazine' },
    { year: '2021', event: 'Opened second location, added wellness services' },
    { year: '2024', event: 'Celebrating 9 years of excellence with 12K+ clients' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920"
            alt="About Us"
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6"
          >
            About <span className="italic font-light">Lush</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Where passion for beauty meets exceptional craftsmanship
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
                Since 2015
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Our Journey to
                <br />
                <span className="italic font-light">Excellence</span>
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6 font-light">
                Lush Beauty Studio was born from a simple dream: to create a space where beauty meets authenticity. 
                Founded by Sarah Mitchell in 2015, we started as a small studio with a big vision—to offer premium 
                beauty services in an environment that feels like home.
              </p>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6 font-light">
                Over the years, we've grown from a team of two to eight talented professionals, each bringing their 
                unique expertise and passion. What hasn't changed is our commitment to personalized service, 
                sustainable practices, and making every client feel beautiful inside and out.
              </p>
              <p className="font-body text-gray-600 text-lg leading-relaxed font-light">
                Today, we're proud to serve over 12,000 clients who trust us with their beauty needs. Every cut, 
                color, treatment, and service is performed with the same care and attention that defined us from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600"
                alt="Salon 1"
                className="w-full h-80 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600"
                alt="Salon 2"
                className="w-full h-80 object-cover mt-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              What We Believe
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Core <span className="italic font-light">Values</span>
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto font-light">
              These principles guide everything we do, from the products we choose to the way we serve you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="text-3xl text-[#C4A484]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Our Journey
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900">
              Timeline of <span className="italic font-light">Milestones</span>
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#C4A484] flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-body text-xl text-gray-700 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#C4A484] text-sm font-semibold tracking-[0.3em] mb-6 uppercase">
              Meet the Experts
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Talented <span className="italic font-light">Team</span>
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Skilled professionals dedicated to bringing out your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-[#C4A484] mb-3 tracking-wide">
                  {member.role}
                </p>
                <p className="font-body text-gray-600 text-sm leading-relaxed font-light">
                  {member.bio}
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
              Ready to Experience
              <br />
              <span className="italic font-light">Lush Beauty?</span>
            </h2>
            <p className="font-body text-xl text-white/80 mb-12 font-light">
              Book your appointment today and discover why clients choose us
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

export default About;