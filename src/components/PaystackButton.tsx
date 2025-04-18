
import { useState } from "react";
import { PaystackButton as ReactPaystackButton } from "react-paystack";
import Swal from "sweetalert2";

interface PaystackButtonProps {
  amount: number; // Amount in naira (will be converted to kobo)
  email: string;
  reference: string;
  onSuccess: () => void;
  onClose: () => void;
  className?: string;
  text?: string;
}

const PaystackButton = ({
  amount,
  email,
  reference,
  onSuccess,
  onClose,
  className = "bg-learnwave-blue hover:bg-learnwave-darkBlue text-white py-2 px-4 rounded-md font-medium",
  text = "Pay Now"
}: PaystackButtonProps) => {
  // Replace with your public key
  const publicKey = "pk_test_your_public_key_here";
  
  // Convert amount to kobo (the smallest currency unit in Nigeria)
  const amountInKobo = amount * 100;
  
  const handleSuccess = () => {
    Swal.fire({
      title: 'Payment Successful!',
      text: 'Your payment was processed successfully',
      icon: 'success',
      confirmButtonColor: '#3498db'
    });
    onSuccess();
  };
  
  const handleClose = () => {
    Swal.fire({
      title: 'Payment Cancelled',
      text: 'The payment process was cancelled',
      icon: 'info',
      confirmButtonColor: '#3498db'
    });
    onClose();
  };
  
  const componentProps = {
    email,
    amount: amountInKobo,
    publicKey,
    text,
    onSuccess: handleSuccess,
    onClose: handleClose,
    reference,
  };
  
  return <ReactPaystackButton {...componentProps} className={className} />;
};

export default PaystackButton;
