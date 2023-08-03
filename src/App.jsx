import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";
import "./App.css";

function App() {
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [isNewGame, setIsNewGame] = useState(true);
	const [gameDifficulty, setGameDifficulty] = useState();
	const [roundNumber, setRoundNumber] = useState(1);
	return (
		<>
			<Header
				currentScore={currentScore}
				highScore={highScore}
				roundNumber={roundNumber}
				gameDifficulty={gameDifficulty}
			/>
			<main>
				{isNewGame ? (
					<Difficulty
						setGameDifficulty={setGameDifficulty}
						setIsNewGame={setIsNewGame}
					/>
				) : (
					<Game
						currentScore={currentScore}
						setCurrentScore={setCurrentScore}
						highScore={highScore}
						setHighScore={setHighScore}
						gameDifficulty={gameDifficulty}
						roundNumber={roundNumber}
						setRoundNumber={setRoundNumber}
						setIsNewGame={setIsNewGame}
					/>
				)}
			</main>
			<Footer />
		</>
	);
}

export default App;
