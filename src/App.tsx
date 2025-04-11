
import React, { Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SetupProfile from "./pages/SetupProfile";
import NewProject from "./pages/NewProject";
import Community from "./pages/Community";
import Classroom from "./pages/Classroom";

// Loading component for suspense
const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-neuxtrek-black flex items-center justify-center">
      <div className="text-neuxtrek-gold text-2xl animate-pulse">
        {t('common.loading')}
      </div>
    </div>
  );
};

// Create a new QueryClient instance inside the component
const App = () => {
  // Create a client inside the component function
  const queryClient = new QueryClient();
  const { i18n } = useTranslation();
  
  // Apply document language attribute based on selected language
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
  }, [i18n.language, i18n.dir]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/setup-profile" element={<SetupProfile />} />
              <Route path="/new-project" element={<NewProject />} />
              <Route path="/community" element={<Community />} />
              <Route path="/classroom" element={<Classroom />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
