import { Container } from "../../styles/Global";
import { Text } from "../../styles/Text";
import { motion, useScroll } from "framer-motion";

import {
	ContactSection,
	ContactSectionContent,
	ContactSectionText,
	ContactsCards,
	ContactCard,
	ContactCardImage,
	ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "../../utils/userData";

export const Contacts = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll();

	return (
		<ContactSection id="contact">
			<Container>
				<ContactSectionContent ref={ref}>
					<motion.div style={{ opacity: scrollYProgress }}>
						<ContactSectionText>
							<Text type="heading2" css={{ color: "$grey4" }}>
								Vamos marcar pra conversar e &nbsp;
								<Text as="span" type="heading2" css={{ color: "$brand1" }}>
								construir algo&nbsp;
								</Text>
								juntos?
							</Text>
						</ContactSectionText>
					</motion.div>
					<ContactsCards>
						<ContactCard>
							<ContactCardImage className="wpp">
								<FaWhatsapp color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4" css={{ color: "$grey4" }}>
									Meu whats
								</Text>
								<Text  css={{ color: "$grey2" }} type="body2">
									Podemos nos ligar para conversar.
								</Text>
								<Text
									as="a"
									css={{ color: "$grey2" }}
									type="body2"
									target="_blank"
									href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
								>
									Clique para me mandar uma mensagem ou ligar.
								</Text>
							</ContactCardContent>
						</ContactCard>

						<ContactCard>
							<ContactCardImage className="email">
								<FaEnvelopeOpen color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4" css={{ color: "$grey4" }}>
									Meu Gmail
								</Text>
								<Text css={{ color: "$grey2" }} type="body2">
									Me envie um email com feedbacks, sugestões e/ou ideias. Fique a vontade!
								</Text>
								<Text
									as="a"
									css={{ color: "$grey2" }}
									type="body2"
									target="_blank"
									href={`mailto=${userData.emailUser}`}
								>
									Clique para me mandar um email.
								</Text>
							</ContactCardContent>
						</ContactCard>
						<ContactCard>
							<ContactCardImage className="linkedin">
								<FaLinkedin color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4"  css={{ color: "$grey4" }}>
									Meu LinkedIn
								</Text>
								<Text css={{ color: "$grey2" }} type="body2">
									Acompanhe minha rede profissional. Nela podemos ter
									interações mais constantes e compartilhar network.
								</Text>
								<Text
									as="a"
									css={{ color: "$grey2" }}
									type="body2"
									target="_blank"
									href={userData.linkedinUser}
								>
									Acesse minha página do Linkedin!
								</Text>
							</ContactCardContent>
						</ContactCard>
					</ContactsCards>
				</ContactSectionContent>
			</Container>
		</ContactSection>
	);
};
