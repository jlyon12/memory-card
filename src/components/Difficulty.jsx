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
		<section className="min-h-full bg-slate-800 grid place-content-center">
			<div className="p-4 gap-8 flex flex-col justify-between items-center border-2 bg-slate-600 text-white rounded-lg shadow ">
				<h2 className="font-bold text-lg">Select Difficulty</h2>
				<div className="flex justify-between gap-4">
					<button
						className="btn hover:btn-hover"
						type="button"
						onClick={startEasyGame}
					>
						Easy
					</button>
					<button
						className="btn hover:btn-hover"
						type="button"
						onClick={startMediumGame}
					>
						Medium
					</button>
					<button
						className="btn hover:btn-hover"
						type="button"
						onClick={startHardGame}
					>
						Hard
					</button>
					<button
						className="btn hover:bg-red-500"
						type="button"
						onClick={startVeryHardGame}
					>
						Trainer
					</button>
				</div>
			</div>
		</section>
	);
}

export default Difficulty;
