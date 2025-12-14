import React, { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import { initGA } from "./utils/analytics";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ArticlesAndGuidesPage = lazy(() => import("./pages/ArticlesAndGuidesPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const WebinarsAndWorkshopsPage = lazy(() => import("./pages/WebinarsAndWorkshopsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/articles-guides" element={<ArticlesAndGuidesPage />} />
              <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources/webinars-workshops" element={<WebinarsAndWorkshopsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;