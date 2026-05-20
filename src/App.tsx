import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Approach from "./sections/Approach";
import Services from "./sections/Services";
import Guarantee from "./sections/Guarantee";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <About />
        <Approach />
        <Services />
        <Guarantee />
        <Contact />
      </main>
      <Footer />
      <div aria-hidden className="grain-overlay" />
    </div>
  );
}
