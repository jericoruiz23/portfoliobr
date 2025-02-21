import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
`;

const Button = styled.button`
  padding: 0.8rem;
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

const StatusMessage = styled.p`
  color: ${({ success }) => (success ? '#00d4ff' : '#ff007a')};
`;

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission (replace with actual backend logic)
        console.log('Form submitted:', formData);
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <ContactSection id="contact">
            <h2>Contact Me</h2>
            <Form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    aria-label="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    aria-label="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Send</Button>
            </Form>
            {status && <StatusMessage success={status.success}>{status.message}</StatusMessage>}
        </ContactSection>
    );
}

export default Contact;