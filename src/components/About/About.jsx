import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #fff;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Profile Photo Section
const PhotoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

`;

const ProfileImage = styled.img`
  width: 180px;
  height: 200px;
  object-fit: cover; /* Recorta la imagen para que se vea mejor */
  border-radius: 90px; /* Esquinas redondeadas */

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
  }

  &:after {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }
`;


const TechContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const IBMTechIcon = styled.img`
  width: 62px; /* Ancho más grande para impresión */
  height: 27px; /* Altura ajustada */
  transition: transform 0.3s ease;
  margin-top: 13px;
  &:hover {
    transform: scale(1.5);
  }
`;

const TechIcon = styled.img`
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.5);
  }
`;



function About() {
  const technologies = [
    { name: "JavaScript", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/JavaScript.png" },
    { name: "React", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/React.png" },
    { name: "Node.js", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/nodejs.png" },
    { name: "MongoDB", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/mongodb.png" },
    { name: "Linux", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/linux.png" },
    { name: "Cybersecurity", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/kali-linux.png" },
    { name: "IBM Cloud", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/ibm.png" },
    { name: "API Development", src: "https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/api.png" }
  ];

  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <AboutText
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        I am a skilled web developer and technical pre-sales engineer with over a year of experience in enterprise solutions.
        My expertise lies in designing robust architectures, implementing API REST and web services, and integrating cybersecurity best practices.
        As an IBM Presales Engineer, I provide technical guidance, craft tailored solutions, and support sales teams in delivering high-impact projects.
        Passionate about secure and innovative software development, I strive to create meaningful technical strategies that drive business success.
      </AboutText>

      {/* Profile Photo Section */}
      <PhotoContainer
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        {/* <ProfileImage src='https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/profile.png' alt="Profile Photo" /> */}
        <ProfileImage src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=Default&mouthType=Twinkle&skinColor=Light' alt="Profile Photo" />
      </PhotoContainer>

      <h3>Technologies I Work With</h3>
      <TechContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {technologies.map((tech) => (
          tech.name === "IBM Cloud" ? (
            <IBMTechIcon key={tech.name} src={tech.src} alt={tech.name} title={tech.name} />
          ) : (
            <TechIcon key={tech.name} src={tech.src} alt={tech.name} title={tech.name} />
          )
        ))}
      </TechContainer>
    </AboutSection>
  );
}

export default About;
