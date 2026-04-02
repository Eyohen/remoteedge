import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustProofBar from '../components/sections/TrustProofBar';
import RolesOverview from '../components/sections/RolesOverview';
import HowItWorks from '../components/sections/HowItWorks';
import QualitySection from '../components/sections/QualitySection';
import SocialProof from '../components/sections/SocialProof';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustProofBar />
        <RolesOverview />
        <HowItWorks />
        <QualitySection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
