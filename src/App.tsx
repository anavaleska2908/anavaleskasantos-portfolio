import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/Global";

export const App = (): JSX.Element => {
	return (
		<GlobalStyle>
			<Navbar />
		</GlobalStyle>
	);
};
