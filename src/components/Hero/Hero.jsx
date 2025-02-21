import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #00d4ff;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #e0e0e0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function Hero() {
    return (
        <HeroSection id="hero">
            <Title
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Welcome to BR Portfolio
            </Title>
            <Subtitle
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                A showcase of innovation and creativity
            </Subtitle>
        </HeroSection>
    );
}

export default Hero;