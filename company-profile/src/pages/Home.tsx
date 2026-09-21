import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import AboutSection from "@/components/AboutSection";
import WebTech from "@/components/WebTech";
import ServicesSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="bg-[#0F1115] text-white">
      <Navbar />
      <div>
        <Jumbotron />
        <WebTech />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
