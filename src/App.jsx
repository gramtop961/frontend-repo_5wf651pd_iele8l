import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import DemoSection from './components/DemoSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f1115] via-[#0a0b0f] to-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
