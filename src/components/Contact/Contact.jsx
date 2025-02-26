import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  color: #e0e0e0;
  position: relative;
`;

const TickerWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  background: #1a1a2e;
  border: 2px solid #00d4ff;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
`;

const TickerTape = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  font-size: 1.5rem;
  font-family: 'Courier New', monospace; /* Techy font, swap with your Monomakh if preferred */
  color: #00d4ff;
  text-transform: uppercase;
`;

const TickerItem = styled(motion.a)`
  margin: 0 2rem;
  color: #00d4ff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #ff007a;
  }
`;

function Contact() {
  const tickerContent = [
    { text: 'Email: benjamin.ruiz2331@gmail.com', href: 'mailto:benjamin.ruiz2331@gmail.com' },
    { text: 'LinkedIn: www.linkedin.com/in/jerico-ruiz-048b86221', href: 'https://www.linkedin.com/in/jerico-ruiz-048b86221' },
    { text: 'Twitter: -------', href: 'https://twitter.com/--------' },
  ];

  const tickerVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15, // Adjust speed here
          ease: 'linear',
        },
      },
    },
  };

  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <TickerWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
      >
        <TickerTape variants={tickerVariants} animate="animate">
          {tickerContent.map((item, index) => (
            <TickerItem
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.text}
            </TickerItem>
          ))}
          {/* Duplicate for seamless looping */}
          {tickerContent.map((item, index) => (
            <TickerItem
              key={`duplicate-${index}`}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.text}
            </TickerItem>
          ))}
        </TickerTape>
      </TickerWrapper>
    </ContactSection>
  );
}

export default Contact;