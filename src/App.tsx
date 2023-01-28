import InfoBox from "./components/InfoBox";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="app-body bg-neutral-800 h-screen m-auto">
        <InfoBox />
      </div>
      <footer className="bg-neutral-800 mx-auto fixed bottom-0 w-screen flex justify-center items-center p-4">
        <h3 className="text-sm text-white">© 2023 maruf99. All rights reserved.</h3>
      </footer>
    </div>
  );
}
