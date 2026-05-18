import Nav from './components/Nav';
import Hero from './components/Hero';
import StatBar from './components/StatBar';
import ClientBar from './components/ClientBar';
import Problem from './components/Problem';
import Services from './components/Services';
import Results from './components/Results';
import Credentials from './components/Credentials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary antialiased selection:bg-accent/30 selection:text-white font-sans">
      {/* Sticky Header Navbar */}
      <Nav />

      {/* Main Corporate Sections */}
      <main>
        {/* Hero Section with pulsating animated interactive network */}
        <Hero />

        {/* Count-up Metrics Bar */}
        <StatBar />

        {/* Johannesburg Client Trust Pill Bar */}
        <ClientBar />

        {/* True IT Staffing cost comparison cards */}
        <Problem />

        {/* Core retainer services (Four Pillars) */}
        <Services />

        {/* Business-driven results & case study cards */}
        <Results />

        {/* Certified tools and credentials logos */}
        <Credentials />

        {/*Retainer packages pricing grid */}
        <Pricing />

        {/* Lead-generation contact flow with EmailJS */}
        <Contact />
      </main>

      {/* Bottom Footer & South Africa locator badges */}
      <Footer />
    </div>
  );
}

export default App;
