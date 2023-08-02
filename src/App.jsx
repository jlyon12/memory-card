import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";

function App() {
	const [currentScore, setCurrentScore] = useState(0);
	return (
		<>
			<Header currentScore={currentScore} />
			<Game currentScore={currentScore} setCurrentScore={setCurrentScore} />
		</>
	);
}

export default App;
