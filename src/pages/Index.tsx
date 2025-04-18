
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <Features />
      
      <PopularCourses />
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-learnwave-blue to-learnwave-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of students learning and growing with LearnWave Academy.
              Get unlimited access to our course library with a subscription.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-learnwave-blue hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
                View Course Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
