import { Container, Flex } from "../../styles/Global";
import { Text } from "../../styles/Text";
import { Button } from "../../styles/Button";
import { Stack } from "../../components/Stack";
import { Project } from "../../components/Project";
import { Contacts } from "../../components/Contacts";
import { stackData } from "../../utils/stackData";
import { userData } from "../../utils/userData";
import { FaGithub } from "react-icons/fa";
import { HandEffect } from "../../components/HandEffect";
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
							<Text color="grey4" css={{ marginLeft: "$2" }}>
								Hello, my name is {userData.nameUser} &nbsp;
								<HandEffect />
							</Text>
						</Flex>
						<Text as="h1" type="heading1" color="grey5">
							I &nbsp;
							<Text as="span" type="heading1" color="brand1">
								love
							</Text>
							&nbsp; creating and &nbsp;
							<Text as="span" type="heading1" color="brand1">
								developing
							</Text>
							&nbsp; projects
						</Text>
						<Text type="body1" color="grey2">
							Discover here in this environment, created
							especially for you, all my projects and technologies
						</Text>
						<HeaderButtonsArea>
							<Button
								as="a"
								type="buttonPrimary"
								href="#projects"
							>
								See Projects
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
							<Text as="h2" type="heading4" color="grey4">
								My projects
							</Text>
							<Text as="p" type="body1" color="grey2">
								Projects created at &nbsp;
								<Text as="span" color="brand5">
									Kenzie Academy
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
