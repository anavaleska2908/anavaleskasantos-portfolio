import {
	ProjectWrapper,
	ProjectTitle,
	ProjectStack,
	ProjectStackTech,
	ProjectLink,
	ProjectLinks,
} from "./style";

import { Text } from "../../styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "../../utils/userData";
import { api } from "../../services/index";

interface RepositoriesType {
	id: number;
	name: string;
	language: string;
	description: string;
	git_url: string;
	homepage: string;
}

export const Project = (): JSX.Element => {
	const [repositories, setRepositories] = useState<RepositoriesType[]>([]);
	console.log("repositories ", repositories);

	useEffect(() => {
		const responseData = async () => {
			api.get(
				`https://api.github.com/users/${userData.githubUser}/repos`,
			).then((response) => {
				setRepositories(response.data);
			});
		};
		responseData();
	}, []);

	return (
		<>
			{repositories?.map((repository) => (
				<ProjectWrapper key={repository.id}>
					<ProjectTitle
						as="h2"
						type="heading3"
						css={{ color: "$grey4", marginBotton: "$3" }}
					>
						{repository.name}
					</ProjectTitle>
					<ProjectStack>
						<Text type="body2" css={{ color: "$grey2"}}>
							Linguagem:
						</Text>
						{repository.language ? (
							<ProjectStackTech>
								<Text css={{ color: "$grey2"}} type="body2">
									{repository.language}
								</Text>
							</ProjectStackTech>
						) : (
							<ProjectStackTech>
								<Text css={{ color: "$grey2"}} type="body2">
									Não identificada
								</Text>
							</ProjectStackTech>
						)}
					</ProjectStack>
					<Text type="body1" css={{ color: "$grey2"}}>
						{repository.description?.substring(0, 129)}
					</Text>
					<ProjectLinks>
						{repository.homepage && (
							<ProjectLink
								target="_blank"
								href={repository.homepage}
							>
								<FaShare /> Aplicação
							</ProjectLink>
						)}
					</ProjectLinks>
				</ProjectWrapper>
			))}
		</>
	);
};
