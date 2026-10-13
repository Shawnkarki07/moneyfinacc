'use client';

import { useState, useCallback } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { NAVIGATION_SECTIONS } from '@/lib/constants';
import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import WhatSection from '@/components/WhatSection';
import PullQuote from '@/components/PullQuote';
import WhySection from '@/components/WhySection';
import Quickstart from '@/components/Quickstart';
import Ticker from '@/components/Ticker';
import WhoSection from '@/components/WhoSection';
import TrackersSection from '@/components/TrackersSection';
import ProductModal from '@/components/ProductModal';
import ClubSection from '@/components/ClubSection';
import RequestSection from '@/components/RequestSection';
import DashboardSection from '@/components/DashboardSection';
import CustomSection from '@/components/CustomSection';
import HowSection from '@/components/HowSection';
import QuotesSection from '@/components/QuotesSection';
import Footer from '@/components/Footer';
import SideRail from '@/components/SideRail';
import ProgressBar from '@/components/ProgressBar';

/**
 * Home Page Component
 *
 * Main landing page for moneyfinacc application
 * Includes all major sections and features
 */
export default function Home() {
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const activeSection = useScrollSpy([...NAVIGATION_SECTIONS]);

  // Initialize reveal on scroll animations
  useRevealOnScroll();

  // Memoized handlers for better performance
  const handleOpenModal = useCallback((productKey: string) => {
    setModalProduct(productKey);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalProduct(null);
  }, []);

  return (
    <ErrorBoundary>
      <ProgressBar />
      <Header activeSection={activeSection} />
      <SideRail activeSection={activeSection} />

      <main>
        <Hero />

        <WhatSection />
        <PullQuote />
        <WhySection />
        <Quickstart />
        <Ticker />
        <WhoSection />
        <TrackersSection onOpenModal={handleOpenModal} />
        <ClubSection />
        <RequestSection />
        <DashboardSection />
        <CustomSection />
        <HowSection />
        <QuotesSection />
        <Footer />
      </main>

      <ProductModal
        productKey={modalProduct}
        onClose={handleCloseModal}
      />
    </ErrorBoundary>
  );
}
