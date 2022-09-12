import { userData } from "../../utils/userData";
import { useMedia } from "use-media";
import { useState } from "react";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Global";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
	NavbarWrapper,
	LogoTipo,
	LogoTipoText,
	NavbarLinks,
	NavbarMobileArea,
} from "./style";

export interface MenuButtonOpen {
	open: Boolean;
	setOpen: (value: Boolean) => void;
}

export const Navbar = (): JSX.Element => {
	const isWide = useMedia({ maxWidth: "991px" });

	document.title = userData.nameUser;

	const [open, setOpen] = useState(false);

	const OpenMenu = () => {
		setOpen(!open);
	};

	return (
		<NavbarWrapper>
			<Container>
				<NavbarMobileArea>
					<LogoTipo>
						<LogoTipoText>{userData.nameUser}</LogoTipoText>
					</LogoTipo>
					{isWide && (
						<Button
							type="icon"
							onClick={OpenMenu}
							aria-label={!open ? "Abrir menu" : "Fechar menu"}
						>
							{!open ? <FaBars /> : <IoClose />}
						</Button>
					)}
				</NavbarMobileArea>
				{isWide ? open && <NavbarLinks /> : <NavbarLinks />}
			</Container>
		</NavbarWrapper>
	);
};

export const NavLinks = (): JSX.Element => {
	return (
		<NavbarLinks>
			<Button type="buttonLink" as="a" color="grey4" href={`#home`}>
				Home
			</Button>
			<Button type="buttonLink" as="a" color="grey4" href={`#projects`}>
				Projects
			</Button>
			<Button type="buttonLink" as="a" color="grey4" href={`#contact`}>
				Contact
			</Button>
			<Button
				type="buttonLink"
				as="a"
				color="grey4"
				href={`#social-media`}
			>
				Social Media
			</Button>
		</NavbarLinks>
	);
};
