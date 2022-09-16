import { GlobalStyle } from "./styles/Global";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Footer } from "./components/Footer";

export const App = (): JSX.Element => {
	return (
		<GlobalStyle>
			<Navbar />
			<Home />
			<Footer />
		</GlobalStyle>
	);
};
