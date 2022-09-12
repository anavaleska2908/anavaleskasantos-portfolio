import { Container, Flex, Box } from "../../styles/Global";
import { Text } from "../../styles/Text";
import { FooterWrapper } from "./style";
import { userData } from "../../utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "../../styles/Button";

export const Footer = (): JSX.Element => {
	return (
		<FooterWrapper id="social-media">
			<Container>
				<Flex></Flex>
			</Container>
		</FooterWrapper>
	);
};
