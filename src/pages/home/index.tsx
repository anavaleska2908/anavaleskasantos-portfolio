import { Container, Flex } from "../../styles/Global";
import { Text } from "../../styles/Text";
import { Button } from "../../styles/Button";
import { Stack } from "../../components/Stack";
import { Project } from "../../components/Project";
import { Contacts } from "../../components/Contacts";
import { stackData } from "../../utils/stackData";
import { userData } from "../../utils/userData";
import { FaGithub } from "react-icons/fa";
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
								width={"48px"}
								height={"48px"}
							/>
							<Text css={{ marginLeft: "$2", color: "$grey4" }}>
								Olá, meu nome é {userData.nameUser} &nbsp;
								✋
							</Text>
						</Flex>
						<Text as="h1" type="heading1" css={{ color: "$grey5" }}>
							Eu
							<Text as="span" type="heading1" css={{ color: "$brand1" }}>
							&nbsp;amo&nbsp;
							</Text>
							planejar e&nbsp; 
							<Text as="span" type="heading1" css={{ color: "$brand1" }}>
								desenvolver
							</Text>
							&nbsp;projetos.
						</Text>
						<Text type="body1" css={{ color: "$grey2" }}>
							Acompanhe por aqui todos os meus projetos e tecnologias. 
							Este portfólio foi criado especialmente para você, espero que goste!
						</Text>
						<HeaderButtonsArea>
							<Button
								as="a"
								type="buttonPrimary"
								href="#projects"
							>
								Veja meus projetos
							</Button>
							<Button
								as="a"
								type="circle"
								target="_blank"
								href={userData.githubUser}
							>
								<FaGithub />
							</Button>
						</HeaderButtonsArea>
						<StackCards>
							{stackData.map((stack, index) => (
								<Stack
									key={index}
									title={stack.title}
									icon={stack.img}
								/>
							))}
						</StackCards>
					</HeaderContent>
				</Container>
			</Header>
			<ProjectsArea id="projects">
				<Container>
					<ProjectAreaWrapperColumns>
						<ProjectsAreaSocialMediaMessage>
							<Text as="h2" type="heading4" css={{ color: "$grey4" }}>
								Meus projetos:
							</Text>
							<Text as="p" type="body1" css={{ color: "$grey2" }}>
								Projetos pessoais, desafios técnicos ou criados na&nbsp;
								<Text as="span" css={{ color: "$brand5" }}>
									Kenzie Academy
								</Text>
								:
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
