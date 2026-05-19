import Nav from './components/Nav';
import Hero from './components/Hero';
import StatBar from './components/StatBar';
import ClientBar from './components/ClientBar';
import Problem from './components/Problem';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import Credentials from './components/Credentials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary antialiased selection:bg-accent/30 selection:text-white font-sans">
      <Nav />

      <main>
        <Hero />
        <StatBar />
        <ClientBar />
        <Problem />
        <Services />
        <About />
        <Testimonials />
        <Results />
        <Credentials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
