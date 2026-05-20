import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Press from "./sections/Press";
import Manifesto from "./sections/Manifesto";
import Method from "./sections/Method";
import Programs from "./sections/Programs";
import Coaches from "./sections/Coaches";
import Spaces from "./sections/Spaces";
import Membership from "./sections/Membership";
import Testimonials from "./sections/Testimonials";
import Journal from "./sections/Journal";
import FAQ from "./sections/FAQ";
import Apply from "./sections/Apply";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900">
      <Nav />
      <main>
        <Hero />
        <Press />
        <Manifesto />
        <Method />
        <Programs />
        <Coaches />
        <Spaces />
        <Membership />
        <Testimonials />
        <Journal />
        <FAQ />
        <Apply />
      </main>
      <Footer />
      <div aria-hidden className="grain-overlay" />
    </div>
  );
}
