import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProblemsSection from "../components/ProblemsSection";
import AboutPreview from "../components/AboutPreview";
import ContactCTA from "../components/ContactCTA";
import AssessmentSection from "../components/AssessmentSection";
import SolutionsSection from "../components/SolutionsSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />

      <ProblemsSection />

      <SolutionsSection />

      <AboutPreview />
      <AssessmentSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
