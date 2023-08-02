function Header({ currentScore, highScore, roundNumber, gameDifficulty }) {
	return (
		<header className="flex justify-between items-center bg-gray-900 text-white p-4">
			<h1 className="font-bold text-xl">Memory Game</h1>
			{gameDifficulty && (
				<div className="flex gap-4">
					<p>
						Difficulty:{" "}
						<span className="font-bold uppercase">{gameDifficulty}</span>
					</p>
					<p>
						Round: <span className="font-bold">{roundNumber}</span>
					</p>
				</div>
			)}
			<div className="flex flex-col items-end space-x-2">
				{gameDifficulty && (
					<p>
						Current Score: <span className="font-bold">{currentScore}</span>
					</p>
				)}
				<p>
					High Score: <span className="font-bold">{highScore}</span>
				</p>
			</div>
		</header>
	);
}
export default Header;
