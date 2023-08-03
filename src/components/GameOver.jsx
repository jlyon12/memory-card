function GameOver({ setIsNewGame, setIsGameOver, currentScore }) {
	return (
		<section className=" bg-slate-800 grid place-content-center">
			<div className="p-4 gap-8 flex flex-col justify-between items-center border-2 bg-slate-600 text-white rounded-lg shadow ">
				<h2 className="font-bold text-lg">Game Over</h2>
				<p>Your score was {currentScore}</p>
				<div className="flex justify-between gap-4">
					<button
						className="btn hover:btn-hover"
						type="button"
						onClick={() => setIsNewGame(true)}
					>
						Change Difficulty
					</button>
					<button
						className="btn hover:btn-hover"
						type="button"
						onClick={() => setIsGameOver(false)}
					>
						Play Again
					</button>
				</div>
			</div>
		</section>
	);
}
export default GameOver;
