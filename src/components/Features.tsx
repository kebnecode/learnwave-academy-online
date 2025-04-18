
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and expert knowledge."
    },
    {
      icon: "🎯",
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to courses from any device, anywhere."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Track your learning journey with detailed progress reports and achievements."
    },
    {
      icon: "🎖️",
      title: "Certificates",
      description: "Earn recognized certificates upon course completion to boost your professional profile."
    },
    {
      icon: "💬",
      title: "Community Support",
      description: "Connect with fellow learners and instructors through our interactive discussion forums."
    },
    {
      icon: "🔄",
      title: "Regular Updates",
      description: "Access continuously updated content to stay current with the latest industry trends."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LearnWave</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to master new skills 
            and advance your career with high-quality courses and expert support.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-learnwave-blue to-learnwave-purple h-14 w-14 rounded-lg text-white flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
