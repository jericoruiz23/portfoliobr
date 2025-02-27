import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

function Footer() {
    return (
        <FooterStyled>
            <p>© 2025 BR. All rights reserved.</p>
        </FooterStyled>
    );
}

export default Footer;