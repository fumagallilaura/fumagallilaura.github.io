import { Container } from "./styles";
import { SocialIconLink } from "../SocialIconLink";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks = ({ size }) => {
  return (
    <Container layoutId="social-links-together" transition={{ duration: 0.7 }}>
      <SocialIconLink href={"https://www.instagram.com/fumagallilaura/"}>
        <FaInstagram size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://www.linkedin.com/in/fumagallidv/?locale=en_US"}>
        <FaLinkedin size={size} />
      </SocialIconLink>
      <SocialIconLink href={"https://github.com/fumagallilaura"}>
        <FaGithub size={size} />
      </SocialIconLink>
    </Container>
  );
};
