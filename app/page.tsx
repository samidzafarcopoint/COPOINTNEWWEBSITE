import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import FeatureSections from '@/components/FeatureSections';
import ProcessSection from '@/components/process-detail-section';
import ServicesOverview from '@/components/ServicesOverview';
import Testimonials from '@/components/Testimonials';
import BlogTeaser from '@/components/BlogTeaser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <FeatureSections />
      <ProcessSection />
      <ServicesOverview />
      <Testimonials />
      <BlogTeaser />
      <Footer />
    </main>
  );
}