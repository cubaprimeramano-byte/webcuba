import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ServicesSection />
      <NewsSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
