import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import AboutPreview from "../components/AboutPreview";
import ContactCTA from "../components/ContactCTA";
import WhyChoose from "../components/WhyChoose";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChoose />
      <ServicesPreview />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
