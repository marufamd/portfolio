import InfoBox from './components/InfoBox';
import './styles/App.css';

export default function App() {
	return (
		<div className="App">
			<div className="app-body bg-gradient-to-br from-orange-400 via-red-500 to-red-700 h-screen m-auto">
				<div className="header-wave">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path
							d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
							className="shape-fill"
						/>
					</svg>
				</div>
				<InfoBox />
			</div>
			<footer className="mx-auto bg-neutral-800 md:bg-transparent md:fixed bottom-0 w-screen flex justify-center items-center p-4">
				<h3 className="text-sm text-white">© 2023 maruf99</h3>
			</footer>
		</div>
	);
}
