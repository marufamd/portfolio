import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Header from './components/sections/Header';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { USER } from './util/config';

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<main>
				<Projects />
				<Skills />
			</main>
			<Footer name={`${USER.FIRST_NAME} ${USER.LAST_NAME}`} />
		</>
	);
}

export default App;
