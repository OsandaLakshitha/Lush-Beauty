import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-6 tracking-tight">
              LUSH <span className="text-white/70">BEAUTY</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A modern beauty studio dedicated to enhancing your natural beauty through expert care and personalized treatments.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Contact', 'FAQ'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-3">
              {['Hair Styling', 'Coloring', 'Treatments', 'Nail Care', 'Skincare', 'Makeup'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>245 Madison Avenue</li>
              <li>New York, NY 10016</li>
              <li className="pt-2">+1 (212) 555-0198</li>
              <li>hello@lushbeauty.com</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[FaInstagram, FaFacebookF, FaPinterestP].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Lush Beauty Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60">Privacy Policy</a>
            <a href="#" className="hover:text-white/60">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;