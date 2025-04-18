import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// PayStack setup - We'll integrate this directly in components where needed
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Student routes */}
          <Route path="/courses" element={<Index />} /> {/* Will be replaced with actual Courses page */}
          <Route path="/courses/:id" element={<Index />} /> {/* Will be replaced with Course Detail page */}
          <Route path="/dashboard" element={<Index />} /> {/* Will be replaced with Student Dashboard */}
          <Route path="/my-learning" element={<Index />} /> {/* Will be replaced with My Courses */}
          
          {/* Admin routes */}
          <Route path="/admin" element={<Index />} /> {/* Will be replaced with Admin Dashboard */}
          <Route path="/admin/courses" element={<Index />} /> {/* Will be replaced with Admin Courses */}
          <Route path="/admin/users" element={<Index />} /> {/* Will be replaced with Admin Users */}
          <Route path="/admin/payments" element={<Index />} /> {/* Will be replaced with Admin Payments */}
          
          {/* Auth routes */}
          <Route path="/login" element={<Index />} /> {/* Will be replaced with Login page */}
          <Route path="/register" element={<Index />} /> {/* Will be replaced with Register page */}
          
          {/* Utility pages */}
          <Route path="/about" element={<Index />} /> {/* Will be replaced with About page */}
          <Route path="/contact" element={<Index />} /> {/* Will be replaced with Contact page */}
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
