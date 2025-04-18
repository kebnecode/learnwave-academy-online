
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-learnwave-blue to-learnwave-purple flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-learnwave-blue to-learnwave-purple">
                LearnWave
              </span>
            </div>
            <p className="text-sm mt-2">
              Empowering minds through accessible online education.
              Discover, learn, and grow with our curated courses.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-learnwave-blue transition-colors">Home</a></li>
              <li><a href="/courses" className="hover:text-learnwave-blue transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-learnwave-blue transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-learnwave-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/courses/programming" className="hover:text-learnwave-blue transition-colors">Programming</a></li>
              <li><a href="/courses/design" className="hover:text-learnwave-blue transition-colors">Design</a></li>
              <li><a href="/courses/business" className="hover:text-learnwave-blue transition-colors">Business</a></li>
              <li><a href="/courses/marketing" className="hover:text-learnwave-blue transition-colors">Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md text-gray-800 text-sm w-full focus:outline-none"
              />
              <button className="bg-learnwave-blue hover:bg-learnwave-darkBlue text-white px-4 py-2 rounded-r-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} LearnWave Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-learnwave-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-learnwave-purple transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-learnwave-purple transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
