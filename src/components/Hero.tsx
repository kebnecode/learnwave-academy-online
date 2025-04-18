
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block text-learnwave-purple font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              EXPAND YOUR HORIZONS
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Learn Without <span className="bg-clip-text text-transparent bg-gradient-to-r from-learnwave-blue to-learnwave-purple">Limits</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Access over 1,000 expert-led courses in tech, business, creative arts and more. 
              Start learning today with our flexible plans and expert instructors.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button className="bg-learnwave-blue hover:bg-learnwave-darkBlue text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg">
                Browse Courses
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="ml-4">
                <div className="font-semibold">Join 50,000+ learners</div>
                <div className="text-sm text-gray-500">Trusted by individuals and teams</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main image */}
            <motion.div 
              className="w-full max-w-lg rounded-lg overflow-hidden shadow-2xl relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-learnwave-blue to-learnwave-purple flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Course Preview</span>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Web Development Bootcamp</h3>
                  <span className="text-learnwave-blue font-bold">$49.99</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-learnwave-purple h-full rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="text-sm text-gray-500">Progress: 75% complete</div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-learnwave-lightPurple opacity-60 animate-float hidden md:block"></div>
            <div className="absolute top-1/2 -left-10 w-8 h-8 rounded-full bg-learnwave-blue opacity-40 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-learnwave-blue opacity-20 animate-float hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
