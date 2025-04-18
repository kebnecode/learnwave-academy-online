
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Swal from "sweetalert2";
import { usePaystackPayment } from "react-paystack";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  enrolled: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  price,
  imageUrl,
  category,
  rating,
  enrolled,
}: CourseCardProps) => {
  // Convert price to Naira for Paystack (example conversion)
  const priceInNaira = price * 500; // Assuming $1 = 500 Naira
  
  // Generate a unique reference for this transaction
  const reference = `${id}-${Date.now()}`;
  
  // Configure Paystack
  const config = {
    reference,
    email: "user@example.com", // This would be the logged in user's email
    amount: priceInNaira * 100, // Paystack amount is in kobo (smallest unit)
    publicKey: "pk_test_your_public_key_here", // Replace with your public key
  };
  
  // Initialize Paystack hook
  const initializePayment = usePaystackPayment(config);
  
  // Success callback
  const onSuccess = () => {
    Swal.fire({
      title: 'Enrollment Successful!',
      text: `You have successfully enrolled in ${title}`,
      icon: 'success',
      confirmButtonColor: '#3498db',
    });
    // Here you would typically update your backend
  };
  
  // Close/failure callback
  const onClose = () => {
    Swal.fire({
      title: 'Enrollment Cancelled',
      text: 'Your enrollment process was cancelled',
      icon: 'info',
      confirmButtonColor: '#3498db',
    });
  };

  const handleEnroll = () => {
    Swal.fire({
      title: 'Enroll in this course?',
      text: `You'll be charged $${price}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3498db',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, enroll now!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Show processing message
        Swal.fire({
          title: 'Processing',
          text: 'Connecting to payment gateway...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        
        // Initialize Paystack payment after a small delay to show the loading UI
        setTimeout(() => {
          initializePayment(onSuccess, onClose);
          Swal.close();
        }, 1000);
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <Badge className="absolute top-2 right-2 bg-learnwave-purple">
            {category}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="font-bold text-lg line-clamp-2 h-14">{title}</h3>
          <p className="text-sm text-gray-600">By {instructor}</p>
        </CardHeader>
        
        <CardContent className="pb-2 flex-grow">
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg 
                key={idx} 
                className={`w-4 h-4 ${idx < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs ml-1 text-gray-600">({rating.toFixed(1)})</span>
          </div>
          <p className="text-xs text-gray-600">{enrolled} students enrolled</p>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-2">
          <div className="text-lg font-bold text-learnwave-blue">${price.toFixed(2)}</div>
          <button 
            onClick={handleEnroll}
            className="bg-learnwave-blue hover:bg-learnwave-darkBlue text-white py-1 px-4 rounded-md text-sm font-medium transition-colors"
          >
            Enroll Now
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
