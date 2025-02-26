import styled from 'styled-components';
import { motion } from 'framer-motion';

// Fonts are already imported in your project via:
// <style>
// @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Extended+Text&family=Monomakh&display=swap');
// </style>

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 6rem;
  font-family: "Libre Barcode 39 Extended Text", serif;
  font-weight: 500;
  font-style: normal;
  color: #00d4ff;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.9), 0 0 60px rgba(0, 212, 255, 0.5);
  margin-bottom: 1.5rem;
  letter-spacing: 2px; /* Adjusted for barcode readability */
  text-transform: uppercase; /* Matches the tech vibe */
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  font-family: "Oswald", serif;
  color: #e0e0e0;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  font-weight: 400; /* Matches Monomakh’s default */
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(0, 212, 255, 0.7);
  border-radius: 50%;
  z-index: 0;
`;

function Hero() {
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <Particle
      key={i}
      initial={{ opacity: 0, x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
      animate={{
        opacity: [0, 1, 0],
        y: Math.random() * -100 - 50,
        transition: {
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        },
      }}
    />
  ));

  return (
    <HeroSection id="hero">
      <Overlay />
      {particles}
      <Title
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
 
      >
        Welcome to Benjamin's Portfolio
      </Title>
      <Subtitle
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        A showcase of innovation and creativity
      </Subtitle>
    </HeroSection>
  );
}

export default Hero;