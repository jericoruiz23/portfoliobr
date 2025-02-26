import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s;
  position: relative; /* Added for absolute positioning of the image */
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #00d4ff;
  border: none;
  border-radius: 5px;
  color: #1a1a2e;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ff007a;
  }
`;

const ImageLink = styled.a`
  padding: 0; /* Adjusted padding */
  display: inline-block;
  cursor: pointer;
`;

function Projects() {
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedCertifications, setExpandedCertifications] = useState(null);

  const projects = [
    { id: 1, title: "Software Engineering", desc: "Bachelor's Degree at Universidad de las Fuerzas Armadas ESPE 2019-2024" },
    { id: 2, title: "TOEFL iBT", desc: "B1 Certified 2018-2020" },
    { id: 3, title: "IBM Software Proficiency Badges", desc: "Sales foundation, Technical Sales" },
  ];

  const experience = [
    { id: 1, title: "Software Intern", desc: "Universidad de las Fuerzas Armadas ESPE", details: "Software management based on Wordpress and Hostinger, setup plugins and analytics. 2022" },
    { id: 2, title: "Frontend Web Dev Intern", desc: "CONSTECOIN CIA. LTDA.", details: "Frontend Web Dev at an IoT Software solution specialized in factory data management. ReactJS, NodeJS, MongoDB, Express" },
    { id: 3, title: "Jr Frontend Web Dev", desc: "CONSTECOIN CIA. LTDA.", details: "Software design for a panic button system using Figma. Create user-friendly interfaces to configure new offset database variables." },
    { id: 4, title: "IBM Presales Engineer", desc: "NEXSYS del Ecuador", details: "Provide technical support to the sales team, including client follow-ups, continuous training, and pre-purchase guidance." },
  ];

  const certifications = [
    { id: 1, title: "NSE 1 Network Security Associate", desc: "Fortinet 2023-2025 Certificate: qzL7MeHzTq", link: "" },
    { id: 2, title: "Introduction to Cybersecurity", desc: "Cisco 2024", link: "https://www.credly.com/badges/d19daa13-b1cb-4f9d-81d4-e59c9d2cfcab/public_url" },
    { id: 3, title: "watsonx Assistant Sales Foundation", desc: "IBM 2024-2025", link: "https://www.credly.com/badges/5e85eebf-b9fc-4809-892d-10054d748c63/public_url" },
    { id: 4, title: "watsonx Assistant Technical Sales Intermediate", desc: "IBM" },
    { id: 5, title: "Turbonomic by IBM Sales Foundation", desc: "IBM", link: "https://www.credly.com/badges/5e85eebf-b9fc-4809-892d-10054d748c63/public_url" },
    { id: 6, title: "Turbonomic by IBM Technical Sales Intermediate", desc: "IBM 2024-2025", link: "https://www.credly.com/badges/837d1382-f0ed-412c-ac9a-a6a2a6e3e888/public_url" },
    { id: 7, title: "Instana by IBM Sales Foundation", desc: "IBM 2024-2025" },
    { id: 8, title: "Instana by IBM Technical Sales Intermediate", desc: "IBM 2024-2025" },
  ];

  const toggleExpandEducation = (id) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  const toggleExpandExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const toggleExpandCertifications = (id) => {
    setExpandedCertifications(expandedCertifications === id ? null : id);
  };

  return (
    <ProjectsSection id="projects">
      <h2>Education</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            {/* Education doesn’t have details, so no button here */}
          </ProjectCard>
        ))}
      </ProjectGrid>
      <br />

      <h2>Experience</h2>
      <ProjectGrid>
        {experience.map((exp) => (
          <ProjectCard
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
            {expandedExperience === exp.id && (
              <>
                <br />
                <p>{exp.details}</p>
              </>
            )}
            <ProjectButton onClick={() => toggleExpandExperience(exp.id)}>
              {expandedExperience === exp.id ? 'Show Less' : 'Show More'}
            </ProjectButton>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <br />

      <h2>Certifications</h2>
      <ProjectGrid>
        {certifications.map((cert) => (
          <ProjectCard
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>{cert.title}</h3>
              {cert.link && (
                <ImageLink href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/certificate1.png"
                    alt={`${cert.title} Certificate`}
                    style={{
                      width: '30px',
                      cursor: 'pointer',
                    }}
                  />
                </ImageLink>
              )}
            </div>
            <p>{cert.desc}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;