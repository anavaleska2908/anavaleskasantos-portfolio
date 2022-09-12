import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/Global";

export const App = (): JSX.Element => {
	return (
		<GlobalStyle>
			<Navbar />
			<Home />
		</GlobalStyle>
	);
};
