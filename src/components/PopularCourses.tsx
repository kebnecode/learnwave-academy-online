
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
  const popularCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Sarah Johnson",
      price: 59.99,
      imageUrl: "/placeholder.svg",
      category: "Programming",
      rating: 4.8,
      enrolled: 4253
    },
    {
      id: "2",
      title: "Advanced UX/UI Design Principles",
      instructor: "Michael Chen",
      price: 49.99,
      imageUrl: "/placeholder.svg",
      category: "Design",
      rating: 4.7,
      enrolled: 3128
    },
    {
      id: "3",
      title: "Data Science Fundamentals with Python",
      instructor: "Alex Rodriguez",
      price: 64.99,
      imageUrl: "/placeholder.svg",
      category: "Data Science",
      rating: 4.9,
      enrolled: 5421
    },
    {
      id: "4",
      title: "Digital Marketing Masterclass",
      instructor: "Emma Williams",
      price: 39.99,
      imageUrl: "/placeholder.svg",
      category: "Marketing",
      rating: 4.6,
      enrolled: 2876
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Popular Courses</h2>
            <p className="text-gray-600 mt-2">Explore our top-rated courses</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="/courses" 
              className="inline-flex items-center text-learnwave-blue font-medium hover:text-learnwave-darkBlue"
            >
              View All Courses
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-6 py-3 bg-learnwave-purple text-white rounded-full font-medium cursor-pointer hover:bg-learnwave-darkPurple transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                clipRule="evenodd" 
              />
            </svg>
            Watch How LearnWave Works
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCourses;
