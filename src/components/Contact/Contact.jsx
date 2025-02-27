import styled from 'styled-components';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const ContactContainer = styled.div`
  padding: 2rem 1rem;
  color: #fff;
  background:rgba(13, 13, 13, 0.27);
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const ContactList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1db954;
  }
`;

function Contact() {
  const contacts = [
    { text: 'Email', href: 'mailto:benjamin.ruiz2331@gmail.com', icon: <Mail size={24} /> },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-ruiz-048b86221/', icon: <Linkedin size={24} /> },
    { text: 'Twitter', href: 'https://twitter.com/--------', icon: <Twitter size={24} /> },
  ];

  return (
    <ContactContainer id="contact">
      <ContactHeading>Get in Touch</ContactHeading>
      <ContactDescription>Feel free to reach out through any of these platforms.</ContactDescription>
      <ContactList>
        {contacts.map((item, index) => (
          <ContactItem
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
            {item.text}
          </ContactItem>
        ))}
      </ContactList>
    </ContactContainer>
  );
}

export default Contact;
