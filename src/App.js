import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import TrustedByBrands from './components/TrustedByBrands/TrustedByBrands';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import Promotion from './components/Promotion/Promotion';
import Login from './pages/Login'; 
import GetStarted from './pages/GetStarted'; 
import Panel from './pages/Panel'; 
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box bg="white" minH="100vh">
        <Routes>
          <Route path="/" element={
            <>
              <Promotion />
              <Navbar />
              <HeroSection />
              <TrustedByBrands />
              <KeyFeatures />
              <CallToAction />
              <Footer />
            </>
          } />
          <Route path="/get-started" element={<GetStarted />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
