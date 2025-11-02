import Hero from "./components/Hero";
import HighlightsStrip from "./components/HighlightsStrip";
import AboutSection from "./components/AboutSection";
import MenuHighlights from "./components/MenuHighlights";
import SustainabilitySection from "./components/SustainabilitySection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="min-h-screen font-sans text-[color:var(--color-neutral-dark)]">
      <SiteHeader />
      <Hero />
      <HighlightsStrip />
      <main className="space-y-24 pb-24 pt-16 md:pt-20">
        <AboutSection />
        <MenuHighlights />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
