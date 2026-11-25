import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Header from './components/sections/Header';

function App() {
	return (
		<>
			<a
				href="#experience"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-stone-900 focus:px-4 focus:py-2 focus:text-stone-50"
			>
				Skip to experience
			</a>
			<NavBar />
			<main className="mx-auto max-w-3xl px-5 sm:px-8">
				<Header />
				<Experience />
				<Education />
			</main>
			<Footer />
		</>
	);
}

export default App;
