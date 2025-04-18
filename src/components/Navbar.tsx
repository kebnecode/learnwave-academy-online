
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <motion.header
      className="bg-white border-b sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-learnwave-blue to-learnwave-purple flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-learnwave-blue to-learnwave-purple">
            LearnWave
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="font-medium text-gray-700 hover:text-learnwave-blue transition-colors">Home</a>
          <a href="/courses" className="font-medium text-gray-700 hover:text-learnwave-blue transition-colors">Courses</a>
          <a href="/about" className="font-medium text-gray-700 hover:text-learnwave-blue transition-colors">About</a>
          <a href="/contact" className="font-medium text-gray-700 hover:text-learnwave-blue transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <a href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-learnwave-blue transition-colors">Dashboard</a>
              <Avatar className="cursor-pointer">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <div className="space-x-2">
              <Button variant="outline" className="hover:bg-gray-100">Sign In</Button>
              <Button className="bg-learnwave-blue hover:bg-learnwave-darkBlue text-white">Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
