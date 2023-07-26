// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;
  const resumeUrl = `https://docs.google.com/document/d/e/2PACX-1vS2tRqtHyPAeBLij1qaF6ICbA7Zs9H8AsFLOldChXdRvYew-y_jaFuz-mpjydgXtZF-cUoIzZ8M1vhw/pub`
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"56px"}
                height={"56px"}
              />
              <Text color="grey4">Hey, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            I develop{" "}
              <Text as="span" type="heading1" color="brand1">
               everything 
              </Text>{" "}
              for the  web!{" "}

    
            </Text>
            <Text type="body1" color="grey2">
              Night owl, dark schemes and long runs. 23, working from Curitiba, Brazil. Full Stack Web Developer. Driven by curiosity and will.
              Wanna see more?
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects" >
                Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Portfolio
              </Button>
              <Button as="a" type="outline" target="_blank" href={resumeUrl}>
                Resume
              </Button>
              <Button
                color="grey4"
                as="a"
                css={{ "&:hover": { color: "$grey2" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h1" type="heading4" color="grey4">
              Here are a few technologies I've been working on recently:
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
