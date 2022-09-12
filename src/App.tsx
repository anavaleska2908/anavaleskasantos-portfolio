import { GlobalStyle } from "./styles/Global";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";

export const App = (): JSX.Element => {
	return (
		<GlobalStyle>
			<Navbar />
			<Home />
		</GlobalStyle>
	);
};
