import { Container, Flex, Box } from "../../styles/Global";
import { Text } from "../../styles/Text";
import { FooterWrapper } from "./style";
import { userData } from "../../utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "../../styles/Button";
import { UserImage } from "../../pages/home/style";

export const Footer = (): JSX.Element => {
	return (
		<FooterWrapper id="social-media">
			<Container>
				<Flex>
					<UserImage
            			src={`https://github.com/${userData.githubUser}.png`}
            			alt={userData.nameUser}
            			title={userData.nameUser}
            			width={"70px"}
            			height={"70px"}
          			/>
          			<Box css={{ marginLeft: "$2" }}>
          			  <Text type="heading4" css={{ color: "$grey5", marginBottom: "$2" }}>
          			    Obrigada!
          			  </Text>
          			  <Text type="body1" css={{ color: "$grey2" }}>
          			    Me siga nas redes sociais e me chama para conversar!
          			  </Text>
          			</Box>
        		</Flex>
        		<Flex>
        		  <Button className="instagram" type="circle" as="a" target="_blank" href={`https://instagram.com/${userData.instagramUser}`}>
        		    <FaInstagram />
        		  </Button>
        		  <Button className="facebook" type="circle" as="a" target="_blank" href={`https://fb.com/${userData.facebookUser}`}>
        		    <FaFacebookF />
        		  </Button>
        		  <Button className="linkedin" type="circle" as="a" target="_blank" href={`https://linkedin.com/in/${userData.linkedinUser}`}>
        		    <FaLinkedinIn />
        		  </Button>
				</Flex>
			</Container>
		</FooterWrapper>
	);
};
