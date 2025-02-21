import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  useEffect(() => {
    document.title = "BR Portfolio";
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Projects />
          <Contact />
        </motion.main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;