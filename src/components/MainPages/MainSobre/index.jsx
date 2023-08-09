import {
  Container,
  ContainerData,
  ImageAndLinks,
  HelloMessage,
  TextAndButton,
} from "./styles";
import { ProfileImage } from "../../profileData/ProfileImage";
import { SocialLinks } from "../../linksIcons/SocialLinks";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { Link } from "react-router-dom";

export const MainSobre = () => {
  return (
    <Container>
      <ContainerData>
        <ImageAndLinks
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage />
          <SocialLinks size={"1.5rem"} />
        </ImageAndLinks>

        <HelloMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Hello :)</h3>
          <p></p>
        </HelloMessage>

        <TextAndButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>
            Welcome to my portfolio. This space is intended to bring together
            the last projects I developed, as well as some information
            about me.
            <br />
            <br />
            I aim to specialize in the area of {" "}
            <strong>BackEnd development</strong>, with FullStack expertise. For this I come
            continuously training myself and applying the knowledge acquired
            in personal and professional projects, using the main
            technologies and tools in the area.
            <br />
            <br />
            I put my complete resume available in the button below, where you can
            find my experiences and professional training.
          </p>

          <a href="https://drive.google.com/file/d/150a3thHn_Wh85EtxTm2GwzE1GS1TA5OA/view?usp=sharing" target='_blank'>
            <PrimaryButton>Complete resume</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};
