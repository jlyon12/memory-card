function Difficulty({ setGameDifficulty, setIsNewGame }) {
	function startEasyGame() {
		setGameDifficulty("easy");
		setIsNewGame(false);
	}
	function startMediumGame() {
		setGameDifficulty("medium");
		setIsNewGame(false);
	}
	function startHardGame() {
		setGameDifficulty("hard");
		setIsNewGame(false);
	}
	function startVeryHardGame() {
		setGameDifficulty("trainer");
		setIsNewGame(false);
	}
	return (
		<main className=" bg-slate-800 grid place-content-center">
			<div className="p-4 gap-8 flex flex-col justify-between items-center border-2 bg-slate-600 text-white rounded-lg shadow ">
				<h2 className="font-bold text-lg">Select Difficulty</h2>
				<div className="flex justify-between gap-4">
					<button
						className="px-2 py-1 border-2 border-slate-400 bg-slate-500 rounded-md hover:bg-slate-700"
						type="button"
						onClick={startEasyGame}
					>
						Easy
					</button>
					<button
						className="px-2 py-1 border-2 border-slate-400 bg-slate-500 rounded-md hover:bg-slate-700"
						type="button"
						onClick={startMediumGame}
					>
						Medium
					</button>
					<button
						className="px-2 py-1 border-2 border-slate-400 bg-slate-500 rounded-md hover:bg-slate-700"
						type="button"
						onClick={startHardGame}
					>
						Hard
					</button>
					<button
						className="px-2 py-1 border-2 border-slate-400 bg-slate-500 rounded-md hover:bg-slate-700"
						type="button"
						onClick={startVeryHardGame}
					>
						Trainer
					</button>
				</div>
			</div>
		</main>
	);
}

export default Difficulty;
