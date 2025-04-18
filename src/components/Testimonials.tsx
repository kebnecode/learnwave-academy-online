
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Software Engineer",
    image: "/placeholder.svg",
    content: "LearnWave transformed my career. The web development bootcamp was comprehensive and up-to-date. Within two months of completing it, I landed a job at a tech startup with a 40% salary increase.",
    rating: 5
  },
  {
    id: 2,
    name: "Lisa Chen",
    role: "Digital Marketing Specialist",
    image: "/placeholder.svg",
    content: "I took three digital marketing courses on LearnWave and the knowledge I gained was immediately applicable. The instructors are true experts and the course content is exceptional.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "UX Designer",
    image: "/placeholder.svg",
    content: "The design courses on LearnWave are top-notch. I was able to build a portfolio of real projects, which helped me transition from graphic design to UX design. Well worth the investment!",
    rating: 4
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have advanced their careers
            and acquired new skills through LearnWave's courses.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 text-8xl text-gray-100 font-serif z-0">
            &ldquo;
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-learnwave-purple"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[current].rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl font-medium text-gray-700 mb-6">
                    {testimonials[current].content}
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-lg">{testimonials[current].name}</p>
                    <p className="text-gray-600">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === current ? "bg-learnwave-purple" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
