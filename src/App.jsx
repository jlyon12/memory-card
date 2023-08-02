import { useState } from "react";
import Header from "./components/Header";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";
import "./App.css";

function App() {
	const [currentScore, setCurrentScore] = useState(0);
	const [isNewGame, setIsNewGame] = useState(true);
	const [gameDifficulty, setGameDifficulty] = useState();
	const [roundNumber, setRoundNumber] = useState(1);
	return (
		<>
			<Header
				currentScore={currentScore}
				roundNumber={roundNumber}
				gameDifficulty={gameDifficulty}
			/>
			{isNewGame ? (
				<Difficulty
					setGameDifficulty={setGameDifficulty}
					setIsNewGame={setIsNewGame}
				/>
			) : (
				<Game
					currentScore={currentScore}
					setCurrentScore={setCurrentScore}
					gameDifficulty={gameDifficulty}
					roundNumber={roundNumber}
					setRoundNumber={setRoundNumber}
				/>
			)}
		</>
	);
}

export default App;
